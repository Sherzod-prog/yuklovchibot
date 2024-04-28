const axios = require('axios');
async function downLoaderVideo(link_url){

    const options = {
      method: 'POST',
      url: 'https://auto-download-all-in-one.p.rapidapi.com/v1/social/autolink',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': "0cf1e33f43msh5beab1fc748588fp11c53ejsn998c51f6e57d", // process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'auto-download-all-in-one.p.rapidapi.com'
      },
      data: {
        url:`${link_url}`, //"https://www.instagram.com/reel/C6RXd-XqwUG/?igsh=MXdjN2ZzM2tuMnR0cA=="
      }
    };
    
    try {
     const response = await axios.request(options);
     const dataVideo= {videoUrl: response.data.medias[0].url}
     return dataVideo
    } catch (error) {
     console.error(error);
    }
}

module.exports = {downLoaderVideo}