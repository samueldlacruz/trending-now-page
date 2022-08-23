import { NewsArticleI } from "../interfaces/News"
import { Types } from "./news.reducer"

export const updateCategory = (category: string) => ({
    type: Types.UPDATE_CATEGORY,
    category: category
})

export const handleError = (message: string) => ({
    message,
    type: Types.SET_ERROR,
})

export const saveNews = ({ news, total }: { news: NewsArticleI, total: number }) => ({
    type: Types.SAVE_NEWS,
    payload: { news, totalResults: total }
})
