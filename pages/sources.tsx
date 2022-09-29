import { GetServerSideProps } from 'next'
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import SourceCard from '../components/SourceCard';
import { SourceI } from '../interfaces/Source'
import newsApi from '../services/NewsAPI'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await newsApi.getAllSources();

    if (response.status === "error") {
        return {
            notFound: true
        }
    }

    const sources = response.sources;

    return {
        props: { sources }
    }
}


const SourcesPage = ({ sources }: { sources: SourceI[] }) => {

    return (
        <>
        <Navbar />
        <div className="flex min-h-screen mt-10 mb-10 relative flex-col">
            <h1 className="text-5xl flex text-center mb-5 text-white flex-col font-bold">
                <span className="first-letter:text-red-700">Sources</span>
            </h1>
            <main className="flex flex-col md:px-10 px-5 mt-4 w-full justify-center items-center">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 gap-5">
                    {sources.map(source => <SourceCard source={source} />)}
                </div>
            </main>

            <ScrollToTop />
        </div>
        </>
    )
}

export default SourcesPage