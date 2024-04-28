const axios = require('axios');
async function downLoaderVideo(loader_link){

    const options = {
      method: 'GET',
      url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post_v2.php',
      params: {url: `${loader_link}`},
      headers: {
        'X-RapidAPI-Key': "0cf1e33f43msh5beab1fc748588fp11c53ejsn998c51f6e57d", // process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
      }
    };
    
    try {
     const response = await axios.request(options);
     const dataVideo= {videoUurl: response.data.items[0].video_versions[1].url, caption: response.data.items[0].caption.text}
     
     return dataVideo
    } catch (error) {
     console.error(error);
    }
}
// downLoaderVideo()
module.exports = {downLoaderVideo}