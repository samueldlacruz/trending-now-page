import ArticleCard from '@/components/Article/ArticleCard'
import ArticleModal from '@/components/Article/ArticleModal'
import CategoriesFilter from '@/components/CategoriesFilter'
import Inform from '@/components/Inform'
import Navbar from '@/components/Navbar'
import PageTitle from '@/components/PageTitle'
import ScrollToTop from '@/components/ScrollToTop'
import Search from '@/components/Search'
import Spinner from '@/components/Spinner'
import { ArticleI } from '@/interfaces/Article'
import { useFetchNews } from 'hooks/useFetchNews'
import { useState } from 'react'

const NewsPage = () => {

  const { loading, error, news } = useFetchNews()
  const [article, setArticle] = useState<ArticleI | null>(null)

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

        {error ?
          <Inform message={error} />
          : (
            <>
              {(!loading && news.length === 0) && <Inform message="No news to show now" />}
              {!loading && news.map((article, index) => (
                <ArticleCard
                  key={index}
                  article={article}
                  onClick={(article) => setArticle(article)}
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