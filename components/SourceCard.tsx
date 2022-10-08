import { SourceI } from '@/interfaces/Source'
import { CATEGORIES_LIST as categories, colors } from "@/utils/categories"
import Link from 'next/link';

const SourceCard = ({ source }: { source: SourceI }) => {

    const CATEGORY_ICON_NAME = categories.find(category => category.name === source.category)?.icon;

    return (
        <div className="source-card">
            <div>
                <div className="w-full border-b border-gray-300/20 py-1">
                    <span className="pl-3 text-lg text-white">{source.name}</span>
                </div>
                <p className="text-sm text-white px-3 py-4">
                    {source.description}
                </p>
            </div>

            <div className="border-t py-1 flex align-center border-gray-300/20">
                <i className={`${CATEGORY_ICON_NAME} ${colors[source.category]} pl-4 border-r border-gray-300/20 text-xl pr-3`}></i>

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