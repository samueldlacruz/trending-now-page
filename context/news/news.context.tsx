import { createContext, ReactNode, useReducer } from "react";
import { ArticleI } from "../../interfaces/Article";
import { NewsReducer } from "../../reducers/news/news.reducer";
import { NewsStateType, NewsType } from "./news.interface";

const initialState = {
    news: { general: [] as ArticleI[] } as NewsType,
    category: "general",
    loading: false,
    query: null,
    error: null,
    totalResults: 0,
}

export const NewsContext = createContext<{
    state: NewsStateType,
    dispatch: React.Dispatch<any>
}>({
    state: initialState,
    dispatch: () => null
});

export const NewsProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(NewsReducer, initialState)

    return (
        <NewsContext.Provider value={{ state, dispatch }}>
            {children}
        </NewsContext.Provider>
    )
}