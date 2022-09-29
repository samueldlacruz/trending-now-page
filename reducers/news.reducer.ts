import { NewsArticleI } from "../interfaces/News";
import { NewsStateType } from "../interfaces/store"

export enum Types {
    SAVE_NEWS = "SET_NEWS",
    UPDATE_CATEGORY = "UPDATE_CATEGORY",
    SET_ERROR = "SET_ERROR",
    UPDATE_LOADING = "SET_LOAD",
    SEARCH_BY_TEXT = "SEARCH_BY_TEXT",
}

export type NewsActions =
    | { type: Types.SAVE_NEWS, payload: { category: string, news: NewsArticleI[] } }
    | { type: Types.UPDATE_CATEGORY, category: string }
    | { type: Types.SET_ERROR, message: string }
    | { type: Types.UPDATE_LOADING, value: boolean }
    | {type: Types.SEARCH_BY_TEXT, query: string }

export function NewsReducer(state: NewsStateType, action: NewsActions) {
    switch (action.type) {
        case Types.SAVE_NEWS:
            return {
                ...state,
                loading: false,
                news: {
                    ...state.news,
                    [action.payload.category]: action.payload.news
                },
            }
        case Types.SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        case Types.UPDATE_CATEGORY:
            return {
                ...state,
                loading: true,
                category: action.category,
            }
        case Types.UPDATE_LOADING:
            return {
                ...state,
                loading: action.value
            }
        case Types.SEARCH_BY_TEXT: 
             return {
                ...state,
                 query: action.query
             }
        default:
            return state
    }
}