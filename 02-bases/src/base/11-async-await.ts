import { GIFResponse } from "../interfaces/gif_response";
import { giphyApi } from "./10-axios";

export const getImage = async() => {
    try {
        const resp = await giphyApi.get<GIFResponse>('/random')
        return resp.data.data.images.downsized_still.url;
    } catch (error) {
        return "URL not found";
    }
    
}

// console.log(getImage());
getImage()
    .then(url =>{console.log(url)})




