import { NewsArticleI } from "../interfaces/News"

const EntryCard = ({ article }: { article: NewsArticleI }) => {
    
    return (
        <div className={`border-slate-200/50 group relative w-full hover:cursor-pointer bg-slate-800/50 hover:scale-[1.01] hover:shadow-slate-800/70 hover:bg-slate-800/70 m-2 border rounded-sm shadow-md entry-card duration-100 ease-in`}>
            <img src={article.urlToImage} className="h-full w-1/3 object-cover group-hover:opacity-20 opacity-10 right-0 -z-10 absolute" alt={article.title.split(' ')[0]} />
            <div className="w-full px-3 py-4">
                <h3 className="font-semibold text-white/80">{article.title}</h3>
                <p className="text-white/70 mt-2">{article.description}</p>
                <p className="text-white w-full text-xs mt-4 flex justify-between">
                    <span><strong>Source: </strong>{article.source.name}</span>
                    <time className="italic" dateTime="2008-02-14 20:00">{new Date(article.publishedAt).toDateString()}</time>
                </p>
            </div>
        </div>
    )
}

export default EntryCard