const apiKey = "knVFAdQQ09fs7Jh5rYObQcAe6rVnFyUO";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({body}) => console.log({ body }))
    .catch(err => console.log(err))
