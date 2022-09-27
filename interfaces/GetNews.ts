import { NewsArticleI } from "./News"

export interface GetNewsOptionsI {
    category?: string
    pageSize?: number
    page?: number
    q?: string
    searchIn?: string
    sources?: string
}

export interface GetNewsResponseI {
    status: string
    articles: NewsArticleI[]
    message?: string
}