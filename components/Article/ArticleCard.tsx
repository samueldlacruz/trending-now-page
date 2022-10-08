import { ArticleI } from "@/interfaces/Article"
import DOMPurify from 'dompurify';
import { useState } from "react";

const ArticleCard = ({ article, onClick }: { article: ArticleI, onClick: (article: ArticleI) => void }) => {

    const [hasImageLoaded, setHasImageLoaded] = useState(false);

    const sanitizedDescription = () => ({
        __html: DOMPurify.sanitize(article.description)
    })

    return (
        <div className="article-card group" onClick={() => onClick(article)}>
            <img
                src={article.urlToImage}
                onLoad={() => setHasImageLoaded(prev => !prev)}
                className={`article-card__image ${hasImageLoaded ? 'block' : 'hidden'}`}
                alt="article title"
            />

            <div className="article-card__container">
                <h3 className="article-card__title">{article.title}</h3>

                <div className="article-card__description" dangerouslySetInnerHTML={sanitizedDescription()} />

                <p className="article-card__footer">
                    <span><strong>Source: </strong>{article.source.name}</span>
                    
                    <time className="italic" dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toDateString()}
                    </time>
                </p>
            </div>
        </div>
    )
}

export default ArticleCard