import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    const addActiveClasses = (pathname: string, classes: string) => {
        return pathname !== router.pathname ? "" : classes
    }

    return (
        <nav className="w-full flex justify-end pt-4 mb-10 relative bg-slate-800/50 border-b border-slate-50/5 backdrop-blur-md">
            <ul className="list-none md:w-1/4 mb-3 mr-4 w-100 flex justify-center gap-5 md:text-2xl text-lg text-white">
                <li
                    onClick={() => router.push('/')}
                    className={`uppercase cursor-pointer font-normal ${addActiveClasses('/', "border-red-600 border-b-4")}`}>
                    news
                </li>

                <li
                    onClick={() => router.push('/sources')}
                    className={`uppercase cursor-pointer font-normal ${addActiveClasses('/sources', "border-red-600 border-b-4")}`}>
                    sources
                </li>
            </ul>
        </nav>
    )
}

export default Navbar