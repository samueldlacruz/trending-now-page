import React from 'react'
import { SourceI } from '../interfaces/Source'
import { CATEGORIES_LIST as categories } from "../utils/categories"
import Link from 'next/link';

const SourceCard = ({ source }: { source: SourceI }) => {

    const colors: { [key: string]: string } = {
        "general": "text-white/50",
        "technology": "text-green-400",
        "business": "text-blue-400",
        "entertainment": "text-orange-400",
        "sports": "text-amber-500",
    }

    return (
        <div className="border hover:scale-[1.01] hover:shadow-slate-800/70 hover:bg-slate-800/70 hover:rotate-1 duration-75 ease-out flex flex-col justify-between bg-slate-800/30 backdrop-blur-sm border-gray-500 rounded-sm">
            <div>
                <div className="w-full border-b border-gray-300/20 py-1">
                    <span className="pl-3 text-lg text-white">{source.name}</span>
                </div>
                <p className="text-sm text-white px-3 py-4">
                    {source.description}
                </p>
            </div>

            <div className="border-t py-1 flex align-center border-gray-300/20">
                <i className={`${categories.find(category => category.name === source.category)?.icon} ${colors[source.category]} pl-4 border-r border-gray-300/20 text-xl pr-3`}></i>

                <Link href={source.url} passHref>
                    <a target="_blank" rel="noopener">
                        <i className="text-white/70 hover:text-white cursor-pointer text-xl pl-3 ri-external-link-line"></i>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default SourceCard