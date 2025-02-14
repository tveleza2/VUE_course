import { GIFResponse } from "../interfaces/gif_response";

const apiKey = "knVFAdQQ09fs7Jh5rYObQcAe6rVnFyUO";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then((body:GIFResponse) => console.log(body.data.images.downsized_medium.url))
    .catch(err => console.log(err));

// console.log(resp)