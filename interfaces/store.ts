import { NewsArticleI } from "./News"

export type NewsStateType =  {
    news: NewsArticleI[]
    loading: boolean
    category: string
    error: string | null
    totalResults: number
}
