import { withRouter } from 'next/router'
import BlockContent from '@sanity/block-content-to-react'
import styled from 'styled-components'

import Header from '../../../../components/header'
import {fetchSanityFeed} from '../../../../utils'

const StoryPost = styled.div`
  .storyContainer {
    img {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      display: block;
    }
  }
`

class Story extends React.Component{
  static async getInitialProps({query}) {
    const sanityQuery = `*[_type == "post" && _id == "${query.id}"]{
      _id,
      "mainImage": mainImage.asset->url,
      _createdAt,
      title,
      body
    }`
    let sanityData = await fetchSanityFeed(sanityQuery);
    return { sanityData }
  }
  render(){
    let data = this.props.sanityData[0];
    return (
      <StoryPost>
        <Header />
        <div className="container">
          <div className="storyContainer">
            <img src={data.coverImage} />
            <BlockContent
              blocks={data.body}
              projectId={process.env.SANITY_PROJECT_ID}
              dataset={process.env.SANITY_DATASET}
            />
          </div>
        </div>
      </StoryPost>
    )
  }
}

export default withRouter(Story)