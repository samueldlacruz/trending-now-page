
const PageTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => {

    return (
        <>
            <h1 className="text-5xl flex text-center text-white flex-col font-bold">
                <span className="first-letter:text-red-700">{title}</span>
            </h1>
            
            {subtitle && (
                <span className="mt-1 text-sm text-white italic">{subtitle}</span>
            )}
        </>
    )
}

export default PageTitle