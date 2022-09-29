import { createContext, ReactNode, useReducer } from "react";
import { NewsArticleI } from "../interfaces/News";
import { NewsStateType, NewsType } from "../interfaces/store";
import { NewsReducer } from "../reducers/news.reducer";

const initialState = {
    news: { general: [] as NewsArticleI[] } as NewsType,
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