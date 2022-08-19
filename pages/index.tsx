import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Tech Top Headlines</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="w-full mt-4 max-w-[585px]">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-5xl flex text-center text-white flex-col font-bold">
            <span className="first-letter:text-red-700">Top</span>
            <span className="mt-1">Headlines</span>
          </h1>

          <div className="w-full md:px-0 px-6">
            <div className="mt-4 flex w-full">
              <input type="text" className="border w-11/12 font-mono rounded-sm py-2 px-2 border-slate-600/60 bg-white/20" placeholder="Search anything, Example: Tesla" />
              <button className="bg-red-700 cursor-pointer text-white rounded-sm ml-2 py-2 px-4">
                <i className="ri-search-line"></i>
              </button>
            </div>

          <div className="flex gap-2 mt-4 justify-center flex-wrap">
            <span className="flex border border-red-400 bg-slate-600/60 px-3 hover:bg-slate-500/60 hover:cursor-pointer text-sm font-bold text-white rounded-full capitalize"><i className="text-red-400 pr-1 ri-fire-fill"></i>Top</span>
            <span className="flex border border-slate-400 bg-slate-600/60 px-3 hover:bg-slate-500/60 hover:cursor-pointer text-sm font-bold text-white rounded-full capitalize"><i className="text-green-400 pr-1 ri-terminal-box-line"></i>technology</span>
            <span className="flex border border-slate-400 bg-slate-600/60 px-3 hover:bg-slate-500/60 hover:cursor-pointer text-sm font-bold text-white rounded-full capitalize"><i className="text-blue-400 pr-1 ri-briefcase-4-fill"></i>business</span>
            <span className="flex border border-slate-400 bg-slate-600/60 px-3 hover:bg-slate-500/60 hover:cursor-pointer text-sm font-bold text-white rounded-full capitalize"><i className="text-orange-400 pr-1 ri-clapperboard-fill"></i>entertainment</span>
            <span className="flex border border-slate-400 bg-slate-600/60 px-3 hover:bg-slate-500/60 hover:cursor-pointer text-sm font-bold text-white rounded-full capitalize"><i className="text-amber-800 pr-1 ri-basketball-fill"></i>sports</span>
          </div>
          </div>
        </div>
      </header>

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

      {/* <footer className="flex h-10 w-full items-center pt-4 justify-center border-t border-t-blue-100/5">
        <a
          className="text-blue-500 hover:text-blue-700 text-xs"
          href="https://github.com/samueldlacruz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span> Samuel De la Cruz G.</span>
        </a>
        <Image src="/github.svg" alt="Github Logo" width={72} height={16} />
      </footer> */}
    </div >
  )
}

export default Home
