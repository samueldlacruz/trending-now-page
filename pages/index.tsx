import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import ArticleModal from '../components/Article/ArticleModal'
import EntryCard from '../components/EntryCard'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop'
import Spinner from '../components/Spinner'
import { NewsContext } from '../context/news.context'
import { NewsArticleI } from '../interfaces/News'
import { handleError, saveNews, updateLoading } from '../reducers/news.actions'
import NewsApi from '../services/NewsAPI'

const Home: NextPage = () => {

  const { state, dispatch } = useContext(NewsContext);
  const [article, setArticle] = useState<NewsArticleI | null>(null)
  const currentNews = state.news[state.category];

  const fetchNews = async () => {
    try {
      
      const response = await NewsApi.getTopHeadlines({ category: state.category });

      if (response.status === "error") return dispatch(handleError(response.message!))

      const news = response.articles;

      dispatch(saveNews({ news, category: state.category }))

    } catch (error) {

      dispatch(handleError(`Something was wrong ${error}`))

    }
  }

  useEffect(() => {
    if (currentNews && currentNews.length > 0) return dispatch(updateLoading(false))
    fetchNews()
  }, [state.category])

  return (
    <div className="flex min-h-screen relative flex-col items-center">
      <Header />

      <main className="flex flex-col mt-4 md:px-0 py-2 px-5 md:w-7/12 w-full justify-center items-center">
        {state.loading && <Spinner />}

        {(!state.loading && currentNews.length === 0) && <Spinner />}

        {!state.loading && currentNews.map((article, index) => (
          <EntryCard
            key={index}
            article={article}
            onClick={() => setArticle(article)}
          />
        ))}
      </main>

      {article && <ArticleModal article={article} onClose={() => setArticle(null)} />}
      <ScrollToTop />
    </div>
  )
}

export default Home