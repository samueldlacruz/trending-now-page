import { useState } from "react";
import { useNews } from "@/context/news/useNews";
import { searchByQuery } from "../reducers/news/news.actions";

const Search = () => {
    
    const { dispatch } = useNews();

    const [terms, setTerms] = useState<string>("")
    
    return (
        <div className="mt-4 flex w-full">
            <input
                type="text"
                value={terms}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setTerms(ev.target.value)}
                className="border w-11/12 text-white font-mono rounded-sm py-2 px-2 border-slate-600/60 bg-white/20"
                placeholder="Search anything, Example: Tesla"
            />

            <button onClick={() => dispatch(searchByQuery(terms))} className="bg-red-700 hover:bg-red-800 cursor-pointer text-white rounded-sm ml-2 py-2 px-4">
                <i className="ri-search-line"></i>
            </button>
        </div>
    )
}

export default Search