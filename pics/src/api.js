import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID SwY12c-TwTpELgUIiIb_QaLJ-5r31tqTm5pSMB3naiU'
        },
        params: {
            query: term
        }
    })

    return response.data.results;
}

export default searchImages;