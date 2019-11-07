
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: process.env.SANITY_PROJECT_ID, 
    dataset: process.env.SANITY_DATASET,
    useCdn: process.env.SANITY_ENABLE_CDN
    // token: 'sanity-auth-token', // or leave blank to be anonymous user
  
})