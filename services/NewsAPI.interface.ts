import { ArticleI } from "../interfaces/Article"
import { SourceI } from "../interfaces/Source"

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
    articles: ArticleI[]
}

export interface GetSourcesResponseI extends GetResponseI {
    sources: SourceI[]
}