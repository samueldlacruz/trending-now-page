
interface GetNewsOptionsI {
    category?: string
    pageSize?: number
    page?: number
}

export const useGetNews = () => {

    const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/top-headlines?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;

    const getNews = async (options?: GetNewsOptionsI) => {
        const { category = "general", pageSize = 10, page = 1 } = options || {};
        
        const response = await fetch(`${BASE_URL}&category=${category}&country=us&pageSize=${pageSize}&page=${page}`)
        return response.json()
    }

    return getNews
}