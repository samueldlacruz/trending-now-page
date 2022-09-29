import { GetNewsOptionsI, GetNewsResponseI, GetSourcesResponseI } from "./NewsAPI.interface";
import { parametersFormatted } from "../utils/parameters";

class NewsAPI {

    BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    private defaultParameters = {
        page: 1,
        pageSize: 10,
        country: "us",
        category: "general",
    }

    async makeAPIRequest(endpoint: "top-headlines" | "everything" | "top-headlines/sources", parameters: GetNewsOptionsI = this.defaultParameters): Promise<any> {
        const response = await fetch(`${this.BASE_URL}/${endpoint}?${parametersFormatted(parameters)}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)

        return response.json()
    }

    async getTopHeadlines(options: GetNewsOptionsI): Promise<GetNewsResponseI> {
        Object.assign(this.defaultParameters, options)

        return this.makeAPIRequest("top-headlines", this.defaultParameters);
    }

    async getAllSources(): Promise<GetSourcesResponseI> {
        const { category, ...options } = this.defaultParameters;

        return this.makeAPIRequest("top-headlines/sources", options);
    }

    async getEverything(options: Pick<GetNewsOptionsI, "searchIn" | "q" | "sources">): Promise<GetNewsResponseI> {
        return this.makeAPIRequest("everything", options);
    }
}

const newsApi = new NewsAPI();
export default newsApi;