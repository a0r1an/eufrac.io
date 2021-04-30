import sanityClient from './libs/sanityClient'

const fetchBlogPostsPaths = async(id) => {
  let posts = [];
  const sanityQuery = `*[_type == "post"] | order(_createdAt desc){
    _id,
    slug
  }`

  try {
    var response = await sanityClient.fetch(sanityQuery);
    for (let item of response) {
      posts.push({
        title: item.slug.current,
        id: item['_id']
      });
    }
  } catch(err) {}
  
  return posts;
}

const fetchBlogPost = async(id) => {
  let post = {};
  const sanityQuery = `*[_type == "post" && _id == "${id}"]{
    _id,
    "mainImage": mainImage.asset->url,
    _createdAt,
    title,
    body
  }`
  
  try {
    var response = await sanityClient.fetch(sanityQuery)
    let item = response[0];
    post = {
      title: item.title,
      description: item.description,
      id: item['_id'],
      publishedAt: item['_createdAt'],
      coverImage: item['mainImage'],
      body: item['body'],
      slug: item['slug']
    };
  } catch(err) {}

  return post;
}

const fetchBlogFeed = async(query) => {
  let filteredData = [];
  const sanityQuery = `*[_type == "post"] | order(_createdAt desc){
    _id,
    "mainImage": mainImage.asset->url,
    description,
    _createdAt,
    title,
    slug
  }`

  try {
    const response = await sanityClient.fetch(sanityQuery)
    for (let item of response) {
      filteredData.push({
        title: item.title,
        description: item.description,
        id: item['_id'],
        publishedAt: item['_createdAt'],
        coverImage: item['mainImage'],
        slug: item['slug']
      });
    }
  } catch(err){}

  return filteredData;
}
export { fetchBlogFeed, fetchBlogPost, fetchBlogPostsPaths }