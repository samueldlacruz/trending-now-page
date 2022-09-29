import DOMPurify from 'dompurify';
import Link from 'next/link';
import React, { useState } from 'react'

const ArticleContent = ({ url, content }: { url: string, content: string }) => {

    const [isUrlCopied, setIsUrlCopied] = useState(false);

    const handleCopyArticleUrl = (url: string) => {
        setIsUrlCopied(true);

        navigator.clipboard.writeText(url);

        setTimeout(() => setIsUrlCopied(false), 1_000);
    }


    return (
        <div className="grid grid-cols-3 mt-5 md:mb-3 mb-10 gap-5 px-2">
            <p className="md:col-span-2 col-span-3 md:mb-0 mb-8 text-white/80" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}></p>
            <div className="flex flex-col w-full md:col-span-1 col-span-3">
                <Link href={url} passHref>
                    <a className="bg-teal-700 hover:bg-teal-500 article-page-button" target="_blank">
                        Read More <i className="pl-4 ri-book-2-line"></i>
                    </a>
                </Link>

                <button onClick={() => handleCopyArticleUrl(url)} className={`bg-blue-700/75  hover:bg-blue-500 article-page-button mt-4 ${isUrlCopied ? "scale-[1.02]" : ""}`}>
                    {isUrlCopied ? "copied!" : "copy url"} <i className={`pl-4 ${isUrlCopied ? 'ri-file-copy-2-line' : 'ri-clipboard-line'}`}></i>
                </button>
            </div>
        </div>
    )
}

export default ArticleContent