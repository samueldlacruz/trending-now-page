import DOMPurify from "dompurify"
import { ArticleI } from "@/interfaces/Article"
import ArticleContent from "./ArticleContent"

const ArticleModal = ({ article, onClose }: { article: ArticleI, onClose: () => void }) => {
  
    return (
        <div className="h-screen fixed overflow-auto border-2 text-white px-4 py-3 border-gray-500 z-50 flex flex-col w-full bg-slate-900/95">
            <img src={article.urlToImage} className="h-3/5 rounded opacity-70 object-top object-cover bg-center" alt="article image" />
            <span className="absolute top-4 text-2xl h-10 w-10 left-5 rounded-full hover:bg-blue-800 bg-blue-800/40 cursor-pointer flex justify-center items-center" onClick={onClose}>
                <i className="ri-arrow-left-line"></i>
            </span>

            <h1 className="font-bold lg:text-3xl md:text-lg text-xl mt-4 md:text-left text-center">{article.title}</h1>

            <div className="border mt-3 bg-slate-700/20 py-2 grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-y-2 border-gray-400 px-3">
                <span><strong>Author: </strong><span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.author) }} /></span>
                <span><strong>Published: </strong>{new Date(article.publishedAt).toLocaleString()}</span>
                <span><strong>source: </strong>{article.source.name}</span>
            </div>

            <ArticleContent url={article.url} content={article.content} />
        </div>
    )
}

export default ArticleModal