import { NewsArticleI } from "./News"
import { SourceI } from "./Source"

export interface GetNewsOptionsI {
    category?: string
    pageSize?: number
    page?: number
    q?: string
    searchIn?: string
    sources?: string
}

export interface GetResponseI {
    status: string
    message?: string
}

export interface GetNewsResponseI extends GetResponseI {
    articles: NewsArticleI[]
}

export interface GetSourcesResponseI extends GetResponseI {
    sources: SourceI[]
}