
const Inform = ({ width = "8rem", message }: { width?: number | string, message: string }) => {

    return (
        <div className="flex pt-4 flex-col items-center">
            <i className={`ri-article-line text-white`} style={{ fontSize: width }}></i>
            <span className="md:text-4xl text-3xl mt-5 text-center text-white/95">{message}</span>
        </div>
    )
}

export default Inform