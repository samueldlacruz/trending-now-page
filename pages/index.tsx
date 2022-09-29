import { useEffect, useState } from 'react'
import ArticleCard from '@/components/Article/ArticleCard'
import ArticleModal from '@/components/Article/ArticleModal'
import CategoriesFilter from '@/components/CategoriesFilter'
import Inform from '@/components/Inform'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'
import ScrollToTop from '@/components/ScrollToTop'
import Search from '@/components/Search'
import Spinner from '@/components/Spinner'
import { useNews } from '@/context/news/useNews'
import { ArticleI } from '@/interfaces/Article'
import { handleError, saveNews, updateLoading } from '../reducers/news/news.actions'
import NewsApi from '@/services/NewsAPI'

const NewsPage = () => {

  const { news, category, loading, error, query, dispatch } = useNews();

  const [article, setArticle] = useState<ArticleI | null>(null)

  const currentNews = news[category];

  const fetchNews = async () => {

    dispatch(updateLoading(true))

    try {
      const response = await NewsApi.getTopHeadlines({
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

  useEffect(() => { fetchNews() }, [query])

  useEffect(() => {
    if (currentNews && currentNews.length > 0) return dispatch(updateLoading(false));
    fetchNews()

  }, [category])

  return (
    <div className="flex min-h-screen mb-5 relative flex-col items-center">
      <Navbar />

      <header className="w-full mt-4">
        <div className="flex flex-col justify-center items-center w-full">
          <PageTitle
            title="Trending Now"
            subtitle="only the top headlines"
          />

          <div className="flex items-center flex-col md:px-0 px-6">
            <Search />
            <CategoriesFilter />
          </div>
        </div>
      </header>

      <main className="flex flex-col my-10 md:px-0 py-2 px-5 md:w-7/12 w-full justify-center items-center">

        {loading && <Spinner />}

        {(error && !loading) ?
          <Inform message={error} />
          : (
            <>
              {(!loading && currentNews.length === 0) && <Inform message="No news to show now" />}
              {!loading && currentNews.map((article, index) => (
                <ArticleCard
                  key={index}
                  article={article}
                  onClick={() => setArticle(article)}
                />
              ))}
            </>
          )}
      </main>

      {article && (
        <ArticleModal
          article={article}
          onClose={() => setArticle(null)}
        />
      )}

      <ScrollToTop />
    </div>

  )
}

export default NewsPage