import { ArticleI } from "../../interfaces/Article"
import { Types } from "./news.types"

export const updateCategory = (category: string) => ({
    type: Types.UPDATE_CATEGORY,
    category: category
})

export const searchByQuery = (query: string) => ({
    query,
    type: Types.SEARCH_BY_TEXT,
})

export const updateLoading = (value: boolean) => ({
    value,
    type: Types.UPDATE_LOADING,
})

export const handleError = (message: string) => ({
    message,
    type: Types.SET_ERROR,
})

export const saveNews = ({ news, category }: { news: ArticleI[], category: string }) => ({
    type: Types.SAVE_NEWS,
    payload: { category, news }
})
