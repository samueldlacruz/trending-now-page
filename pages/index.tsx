import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import EntryCard from '../components/EntryCard'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop'
import Spinner from '../components/Spinner'
import { NewsContext } from '../context/news.context'
import { useGetNews } from '../hooks/useGetNews'
import { handleError, saveNews, updateLoading } from '../reducers/news.actions'

const Home: NextPage = () => {

  const getNews = useGetNews();

  const { state, dispatch } = useContext(NewsContext);

  const currentNews = state.news[state.category];

  const fetchNews = () => {
    getNews({ category: state.category }).then((data) => {
      if (data.status === "error") return dispatch(handleError(data.message))

      dispatch(saveNews({ news: data.articles, category: state.category }))

    }).catch((_err) => dispatch(handleError("Something was wrong")))
  }

  useEffect(() => {
    if (currentNews && currentNews.length > 0) return dispatch(updateLoading(false))
    fetchNews()
  }, [state.category])

  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Header />

      <main className="flex flex-col mt-4 md:px-0 px-5 md:w-7/12 w-full justify-center items-center">
        {state.loading && <Spinner />}
        {(!state.loading && currentNews.length === 0) && <Spinner />}
        {!state.loading && currentNews.map((article, index) => <EntryCard article={article} key={index} />)}
      </main>

      <ScrollToTop />
    </div>
  )
}

export default Home