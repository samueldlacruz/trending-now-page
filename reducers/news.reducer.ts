import { NewsArticleI } from "../interfaces/News";
import { NewsStateType } from "../interfaces/store"

export enum Types {
    SAVE_NEWS = "SET_NEWS",
    UPDATE_CATEGORY = "UPDATE_CATEGORY",
    SET_ERROR = "SET_ERROR",
}

export type NewsActions =
    | { type: Types.SAVE_NEWS, payload: { totalResults: number, news: NewsArticleI[] } }
    | { type: Types.UPDATE_CATEGORY, category: string }
    | { type: Types.SET_ERROR, message: string }

export function NewsReducer(state: NewsStateType, action: NewsActions) {
    switch (action.type) {
        case Types.SAVE_NEWS:
            return {
                ...state,
                loading: false,
                news: action.payload.news,
                totalResults: action.payload.totalResults
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
        default:
            return state
    }
}