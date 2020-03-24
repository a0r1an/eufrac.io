
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: process.env.EUFRACIO_SANITY_PROJECT_ID, 
    dataset: process.env.EUFRACIO_SANITY_DATASET,
    useCdn: process.env.EUFRACIO_SANITY_ENABLE_CDN
    // token: 'sanity-auth-token', // or leave blank to be anonymous user
  
})