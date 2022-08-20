import type { NextPage } from 'next'
import Head from 'next/head'
import EntryCard from '../components/EntryCard'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Header />
      <main className="flex flex-col mt-4 md:px-0 px-5 w-full justify-center items-center">
        {[0, 0, 0].map((_, index) => <EntryCard key={index} />)}
      </main>
    </div>
  )
}

export default Home