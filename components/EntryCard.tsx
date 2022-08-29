import { NewsArticleI } from "../interfaces/News"
import DOMPurify from 'dompurify';

const EntryCard = ({ article }: { article: NewsArticleI }) => {
    
    const sanitizedDescription = () => ({
      __html: DOMPurify.sanitize(article.description)
    })

    return (
        <div className="entry-card group">
            <img src={article.urlToImage} className="entry-card__image" alt={article.title.split(' ')[0]} />
          
            <div className="entry-card__container">
                <h3 className="entry-card__title">{article.title}</h3>
                
                <div className="entry-card__description" dangerouslySetInnerHTML={sanitizedDescription()} />

                <p className="entry-card__footer">
                    <span><strong>Source: </strong>{article.source.name}</span>
                    <time className="italic" dateTime="2008-02-14 20:00">{new Date(article.publishedAt).toDateString()}</time>
                </p>
            </div>
        </div>
    )
}

export default EntryCard