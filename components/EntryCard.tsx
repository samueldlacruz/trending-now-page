import { NewsArticleI } from "../interfaces/News"
import DOMPurify from 'dompurify';
import { useState } from "react";

const EntryCard = ({ article, onClick }: { article: NewsArticleI, onClick: () => void }) => {

    const [hasImageLoaded, setHasImageLoaded] = useState(false);

    const sanitizedDescription = () => ({
        __html: DOMPurify.sanitize(article.description)
    })

    return (
        <div className="entry-card group" onClick={onClick}>
            <img
                src={article.urlToImage}
                onLoad={() => setHasImageLoaded(prev => !prev)}
                className={`entry-card__image ${hasImageLoaded ? 'block' : 'hidden'}`}
                alt="article title"
            />

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