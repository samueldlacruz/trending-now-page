import { CATEGORIES_LIST as categories } from "../utils/categories"
import { hover } from "../utils/twu"

const CategoriesList = () => {

    return (
        <div className="flex gap-2 mt-4 justify-center flex-wrap">
            {categories.map((category, index) => (
                <span key={index} className={`flex border border-slate-400 bg-slate-600/60 px-3 ${hover("bg-slate-500/60", "cursor-pointer")} text-sm font-bold text-white rounded-full capitalize`}>
                    <i className={`${category.icon} text-${category.iconColor} pr-1`}></i>
                    {category.name}
                </span>
            ))}
        </div>
    )
}

export default CategoriesList