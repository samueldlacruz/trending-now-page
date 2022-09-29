import { NewsStateType } from "../../context/news/news.interface";
import { NewsActions, Types } from "./news.types";

export function NewsReducer(state: NewsStateType, action: NewsActions) {

    switch (action.type) {
        case Types.SAVE_NEWS:
            return {
                ...state,
                error: null,
                news: {
                    ...state.news,
                    [action.payload.category]: action.payload.news
                },
            }
        case Types.SET_ERROR:
            return {
                ...state,
                error: action.message,
            }
        case Types.UPDATE_CATEGORY:
            return {
                ...state,
                category: action.category,
            }
        case Types.UPDATE_LOADING:
            return { ...state, loading: action.value }
        case Types.SEARCH_BY_TEXT:
            return { ...state, query: action.query }
        default:
            return state
    }
}