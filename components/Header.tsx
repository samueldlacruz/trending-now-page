import { useContext } from "react"
import { NewsContext } from "../context/news.context"
import CategoriesList from "./CategoryList"
import Search from "./Search"

const Header = () => {

    const { state: { category } } = useContext(NewsContext)

    return (
        <header className="w-full mt-4">
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="text-5xl flex text-center text-white flex-col font-bold">
                    <span className="first-letter:text-red-700">Trending Now</span>
                </h1>
                <span className="mt-2 text-sm text-white italic">only the top headlines {category !== "general" && `about the ${category}`}</span>

                <div className="flex items-center flex-col md:px-0 px-6">
                    <Search />
                    <CategoriesList />
                </div>
            </div>
        </header>

    )
}

export default Header