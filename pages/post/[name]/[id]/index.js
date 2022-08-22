import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import styled from 'styled-components'
import moment from 'moment';
import Head from 'next/head'

import Header from '../../../../components/header'
import {fetchBlogPost, fetchBlogPostsPaths} from '../../../../utils'

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

export async function getStaticProps({params}) {
  let postData = await fetchBlogPost(params.id);
  return { 
    props: {
      postData: JSON.parse(JSON.stringify(postData))
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
   let posts = await fetchBlogPostsPaths();

   // Get the paths we want to pre-render based on posts
   const paths = posts.map((post) => ({
     params: { 
       id: post.id,
       name: post.title
     },
   }))
 
   // We'll pre-render only these paths at build time.
   // { fallback: false } means other routes should 404.
   return { paths, fallback: false }
}

function Post({postData}){
    return (
      <PostWrapper>
        <Head>
          <title>{postData.title} | Eufrac.io</title>
        </Head>
        <div className="container">
        <Header />
        <h1 className="title">{postData.title}</h1>
        <span className="date">{moment(postData.publishedAt).format('MMMM Do YYYY')}</span>
        <img src={postData.coverImage} className="coverImage" />
        <BlockContent
          className="content codeSnippet"
          blocks={postData.body}
          serializers={serializers}
          projectId={process.env.EUFRACIO_SANITY_PROJECT_ID}
          dataset={process.env.EUFRACIO_SANITY_DATASET}
        />
        </div>
      </PostWrapper>
    )
}

export default Post