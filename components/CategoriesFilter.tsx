import { useNews } from "@/context/news/useNews";
import { updateCategory, updateLoading } from "../reducers/news/news.actions";
import { CATEGORIES_LIST as categories, colors } from "@/utils/categories"

const CategoriesFilter = () => {

    const { category: currentCategory, dispatch } = useNews();

    const changeCategory = (categoryName: string) => {
        dispatch(updateCategory(categoryName))
        dispatch(updateLoading(true));
    }

    return (
        <div className="flex gap-2 mt-4 justify-center flex-wrap">
            {categories.map((category, index) => (
                <span onClick={() => changeCategory(category.name)} key={index} className={`flex border ${currentCategory === category.name ? 'border-red-400 bg-slate-400/50' : 'border-slate-400'} bg-slate-600/60 px-3 hover:bg-slate-500/60 hover:cursor-pointer text-sm font-bold text-white rounded-full capitalize`}>
                    <i className={`${category.icon} ${colors[category.name]} pr-1`}></i>
                    {category.name}
                </span>
            ))}
        </div>
    )
}

export default CategoriesFilter