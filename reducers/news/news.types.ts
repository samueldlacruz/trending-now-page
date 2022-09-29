import { ArticleI } from "../../interfaces/Article";

export enum Types {
    SAVE_NEWS = "SET_NEWS",
    UPDATE_CATEGORY = "UPDATE_CATEGORY",
    SET_ERROR = "SET_ERROR",
    UPDATE_LOADING = "SET_LOAD",
    SEARCH_BY_TEXT = "SEARCH_BY_TEXT",
}

export type NewsActions =
    | { type: Types.SAVE_NEWS, payload: { category: string, news: ArticleI[] } }
    | { type: Types.UPDATE_CATEGORY, category: string }
    | { type: Types.SET_ERROR, message: string }
    | { type: Types.UPDATE_LOADING, value: boolean }
    | {type: Types.SEARCH_BY_TEXT, query: string }