import { useNews } from "@/context/news/useNews";
import newsApi from "@/services/NewsAPI";
import { useEffect } from "react";
import { handleError, saveNews, updateLoading } from "reducers/news/news.actions";

export const useFetchNews = () => {
    const { news, category, loading, error, query, dispatch } = useNews();

    const currentNews = news[category];

    const fetchNews = async () => {

        dispatch(updateLoading(true))

        try {
            const response = await newsApi.getTopHeadlines({
                category,
                ...(query !== null) ? { q: query } : {}
            });

            if (response.status === "error") {
                dispatch(handleError(response.message!))
                return
            }

            const news = response.articles;

            dispatch(saveNews({ news, category: category }))
            dispatch(updateLoading(false));

        } catch (error) {

            dispatch(handleError(`Something was wrong ${error}`))
            dispatch(updateLoading(false));

        }
    }

    /**
     * Get news when query search change
     */
    useEffect(() => { fetchNews() }, [query])

    /**
     * Get news when categories filter changed
     */
    useEffect(() => {
        if (currentNews && currentNews.length > 0) return dispatch(updateLoading(false));
        fetchNews()
    }, [category])

    return {
        error,
        loading,
        news: currentNews,
    }
}