import { useContext } from "react"
import { NewsContext } from "./news.context"

export const useNews = () => useContext(NewsContext);