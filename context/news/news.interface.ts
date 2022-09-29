import { ArticleI } from "../../interfaces/Article"

export type NewsStateType =  {
    news: NewsType
    loading: boolean
    category: string
    error: string | null
    query: string | null
}

export type NewsType = {
    [key: string]: ArticleI[]
}