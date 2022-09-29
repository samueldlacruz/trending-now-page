import { useContext } from "react"
import { NewsContext } from "../context/news/news.context"
import { updateCategory } from "../reducers/news.actions";
import { CATEGORIES_LIST as categories } from "../utils/categories"

const CategoriesList = () => {

    const { state: { category: currentCategory }, dispatch } = useContext(NewsContext);

    const colors: { [key: string]: string } = {
        "general": "text-white/50",
        "technology": "text-green-400",
        "business": "text-blue-400",
        "entertainment": "text-orange-400",
        "sports": "text-amber-500",
    }
    
    return (
        <div className="flex gap-2 mt-4 justify-center flex-wrap">
            {categories.map((category, index) => (
                <span onClick={() => dispatch(updateCategory(category.name))} key={index} className={`flex border ${currentCategory === category.name ? 'border-red-400 bg-slate-400/50' : 'border-slate-400'} bg-slate-600/60 px-3 hover:bg-slate-500/60 hover:cursor-pointer text-sm font-bold text-white rounded-full capitalize`}>
                    <i className={`${category.icon} ${colors[category.name]} pr-1`}></i>
                    {category.name}
                </span>
            ))}
        </div>
    )
}

export default CategoriesList