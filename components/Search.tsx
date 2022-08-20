
const Search = () => {
    return (
        <div className="mt-4 flex w-full">
            <input type="text" className="border w-11/12 font-mono rounded-sm py-2 px-2 border-slate-600/60 bg-white/20" placeholder="Search anything, Example: Tesla" />
            <button className="bg-red-700 hover:bg-red-800 cursor-pointer text-white rounded-sm ml-2 py-2 px-4">
                <i className="ri-search-line"></i>
            </button>
        </div>
    )
}

export default Search