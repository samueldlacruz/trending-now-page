import { GetServerSideProps, NextPage } from 'next'
import Navbar from '@/components/Navbar';
import PageTitle from '@/components/PageTitle';
import ScrollToTop from '@/components/ScrollToTop';
import SourceCard from '@/components/SourceCard';
import { SourceI } from '@/interfaces/Source'
import newsApi from '@/services/NewsAPI'

type Props = {
    sources: SourceI[]
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
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

const SourcesPage: NextPage<Props> = ({ sources }) => {

    return (
        <div className="flex min-h-screen mb-5 relative flex-col">
            <Navbar />
            <PageTitle title="Sources" />

            <main className="flex flex-col md:px-10 px-5 mt-8 w-full justify-center items-center">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 gap-5">
                    {sources.map((source) => <SourceCard key={`source-card-${source.id}`} source={source} />)}
                </div>
            </main>

            <ScrollToTop />
        </div>
    )
}

export default SourcesPage