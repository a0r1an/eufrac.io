import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config({silent: true})


const fetchSanityFeed = async(query) => {
  try {
    let response = await axios.post(`${process.env.EUFRACIO_URL}/api/sanity`, {query})
    let sanityData = response.data;
    let filteredData = [];
    for (let item of sanityData) {
      filteredData.push({
        title: item.title,
        description: item.description,
        id: item['_id'],
        publishedAt: item['_createdAt'],
        coverImage: item['mainImage'],
        body: item['body'],
        slug: item['slug']
      });
    }
    return await filteredData;
  } catch(e) {
    return []
  }
}

export { fetchSanityFeed }