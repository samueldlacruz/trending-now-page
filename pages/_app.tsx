import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NewsProvider } from '@/context/news/news.context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trending Now</title>
      </Head>
      <NewsProvider>
        <Component {...pageProps} />
      </NewsProvider>
    </>
  )

}

export default MyApp
