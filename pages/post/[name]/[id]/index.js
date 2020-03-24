import { withRouter } from 'next/router'
import BlockContent from '@sanity/block-content-to-react'
import styled from 'styled-components'
import moment from 'moment';



import Header from '../../../../components/header'
import {fetchSanityFeed} from '../../../../utils'

const PostWrapper = styled.div`
  .title{
    font-size: 3.4em;
    line-height: 1.5em;
    margin: 0 auto 1.5rem;
    text-align: center;
  }
  .date {
    display: block;
    font-size: 1.2em;
    margin: 0 0 1rem;
    text-align: center;
  }
  .coverImage {
    width: 100%;
    margin: 0 auto 4rem;
    display: block;
  }
  .content {
    font-family: 'Raleway', sans-serif;
    font-size: 1.8em;
    line-height: 1.8em;
    p {
      margin: 0 0 4rem;
    }
  }
  @media (min-width: 1024px) {
    .title{
      width: 80%;
    }
  }
`
const serializers = {
  types: {
    myCode: props => (
      <pre className={`language-${props.node.language}`} data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    htmlCode: props => (
      <div className={`language-${props.node.language}`} data-language={props.node.language}>
        <div dangerouslySetInnerHTML={{ __html: props.node.code }} />
      </div>
    )
  }
}
class Post extends React.Component{
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
      <PostWrapper>
        <div className="container">
        <Header />
        <h1 className="title">{data.title}</h1>
        <span className="date">{moment(data.publishedAt).format('MMMM Do YYYY')}</span>
        <img src={data.coverImage} className="coverImage" />
        <BlockContent
          className="content codeSnippet"
          blocks={data.body}
          serializers={serializers}
          projectId={process.env.EUFRACIO_SANITY_PROJECT_ID}
          dataset={process.env.EUFRACIO_SANITY_DATASET}
        />
        </div>
      </PostWrapper>
    )
  }
}

export default withRouter(Post)