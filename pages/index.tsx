import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Tech Top Headlines</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col mt-4 md:px-0 px-5 w-full justify-center items-center">
        <div className="border-slate-200/50 bg-slate-800/50 hover:cursor-pointer hover:scale-[1.01] m-2 border rounded-sm px-3 py-4 max-w-[585px] shadow-md duration-100 ease-in hover:shadow-slate-800/70">
          <h3 className="font-semibold text-white/70">New Title</h3>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
          <p className="text-white w-full text-xs mt-4 flex justify-between">
            <span><strong>Source:</strong> HackerNews</span>
            <time className="italic" dateTime="2008-02-14 20:00">2008-02-14 20:00</time>
          </p>
        </div>
        <div className="border-slate-200/50 bg-slate-800/50 hover:cursor-pointer hover:scale-[1.01] m-2 border rounded-sm px-3 py-4 shadow-md duration-100 ease-in hover:shadow-slate-800/70">
          <h3 className="font-semibold text-white/70">New Title</h3>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
          <p className="text-white w-full text-xs mt-4 flex justify-between">
            <span><strong>Source:</strong> HackerNews</span>
            <time className="italic" dateTime="2008-02-14 20:00">2008-02-14 20:00</time>
          </p>
        </div>
        <div className="border-slate-200/50 bg-slate-800/50 hover:cursor-pointer hover:scale-[1.01] m-2 border rounded-sm px-3 py-4 shadow-md duration-100 ease-in hover:shadow-slate-800/70">
          <h3 className="font-semibold text-white/70">New Title</h3>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
          <p className="text-white w-full text-xs mt-4 flex justify-between">
            <span><strong>Source:</strong> HackerNews</span>
            <time className="italic" dateTime="2008-02-14 20:00">2008-02-14 20:00</time>
          </p>
        </div>
        <div className="border-slate-200/50 bg-slate-800/50 hover:cursor-pointer hover:scale-[1.01] m-2 border rounded-sm px-3 py-4 shadow-md duration-100 ease-in hover:shadow-slate-800/70">
          <h3 className="font-semibold text-white/70">New Title</h3>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
          <p className="text-white w-full text-xs mt-4 flex justify-between">
            <span><strong>Source:</strong> HackerNews</span>
            <time className="italic" dateTime="2008-02-14 20:00">2008-02-14 20:00</time>
          </p>
        </div>
      </main>
    </div >
  )
}

export default Home
