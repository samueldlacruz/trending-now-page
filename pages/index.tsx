import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import ArticleModal from '../components/Article/ArticleModal'
import ArticleCard from '../components/Article/ArticleCard'
import Header from '../components/Header'
import NotFound from '../components/NotFound'
import ScrollToTop from '../components/ScrollToTop'
import Spinner from '../components/Spinner'
import { NewsContext } from '../context/news.context'
import { NewsArticleI } from '../interfaces/News'
import { handleError, saveNews, updateLoading } from '../reducers/news.actions'
import NewsApi from '../services/NewsAPI'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {


  const router = useRouter();

  const { state, dispatch } = useContext(NewsContext);
  const [article, setArticle] = useState<NewsArticleI | null>(null)

  const GET_NEWS_DELAY_TIMEOUT = 3_000;

  const currentNews = state.news[state.category];

  const fetchNews = async () => {

    try {
      const response = await NewsApi.getTopHeadlines({
        category: state.category,
        ...(state.query !== null) ? { q: state.query } : {}
      });

      if (response.status === "error") return dispatch(handleError(response.message!))

      const news = response.articles;

      dispatch(saveNews({ news, category: state.category }))

    } catch (error) {

      dispatch(handleError(`Something was wrong ${error}`))

    }
  }

  useEffect(() => {
    dispatch(updateLoading(true))
    const getNewsTimeout = setTimeout(() => fetchNews(), GET_NEWS_DELAY_TIMEOUT)

    return () => clearTimeout(getNewsTimeout)
  }, [state.category, state.query])

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen relative flex-col items-center">
        <Header />

        <main className="flex flex-col mt-4 md:px-0 py-2 px-5 md:w-7/12 w-full justify-center items-center">

          {state.loading && <Spinner />}

          {(!state.loading && currentNews.length === 0) && <NotFound />}

          {!state.loading && currentNews.map((article, index) => (
            <ArticleCard
              key={index}
              article={article}
              onClick={() => setArticle(article)}
            />
          ))}
        </main>

        {article && <ArticleModal article={article} onClose={() => setArticle(null)} />}
        <ScrollToTop />
      </div>
    </>
  )
}

export default Home