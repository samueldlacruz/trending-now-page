import { useContext } from "react"
import { NewsContext } from "./news.context"

export const useNews = () => {
    const { state, dispatch } = useContext(NewsContext)

    return { ...state, dispatch }
}