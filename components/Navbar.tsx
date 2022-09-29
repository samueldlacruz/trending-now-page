import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    const addActiveClasses = (pathname: string, classes: string) => {
        return pathname !== router.pathname ? "" : classes
    }

    return (
        <nav className="w-full flex justify-end mt-5">
            <ul className="list-none w-1/4 flex justify-center gap-5 text-2xl text-white">
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