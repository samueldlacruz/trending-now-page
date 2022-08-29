import { NewsArticleI } from "../interfaces/News"
import { Types } from "./news.reducer"

export const updateCategory = (category: string) => ({
    type: Types.UPDATE_CATEGORY,
    category: category
})

export const updateLoading = (value: boolean) => ({
    value,
    type: Types.UPDATE_LOADING,
})

export const handleError = (message: string) => ({
    message,
    type: Types.SET_ERROR,
})

export const saveNews = ({ news, category }: { news: NewsArticleI, category: string }) => ({
    type: Types.SAVE_NEWS,
    payload: { category, news }
})
