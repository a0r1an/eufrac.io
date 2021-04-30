import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Header from '../components/header'
import PostTeaser from '../components/postTeaser'
import {fetchBlogFeed} from '../utils'

const IndexPage = styled.div`
  margin: 0 0 3rem;
  .blogList {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin: 0 0 6rem;
    }
  }
  .socialList {
    margin: 0;
    padding: 10px 0 0;
    width: 100%;
    border-top: 1px solid #d6d6d6;
    li{
      display: inline-block;
      margin: 0 10px 0 0;
    }
    a {
      text-decoration: none;
      color: #000;
    }
  }
`
export async function getStaticProps() {
  const blogData =  await fetchBlogFeed();
  return { 
    props: {
      blogData: JSON.parse(JSON.stringify(blogData))
    },
    revalidate: 1
  }
}

function Index({blogData}){
  return (
    <IndexPage>
      <Head>
        <title>Eufrac.io</title>
        <meta name="description" content="Hello! Name is Adrian Eufracio, Software Engineer, and I am here to talk about code stuff."></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,800|Raleway&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="container">
        <Header />
        <ul className="blogList">
          {blogData && blogData.map(item => 
            <li key={item.id} >
                <PostTeaser 
                  key={item.id} 
                  publishedAt={item.publishedAt} 
                  postTitle={item.title} 
                  postDescription={item.description} 
                  slugTitle={item.slug.current} 
                  postId={item.id} 
                />
            </li>
          )}
        </ul>
        <ul className="socialList">
          <li><a href="https://github.com/a0r1an" target="_blank" rel="noopener">GITHUB</a></li>
          <li><a href="https://stackoverflow.com/users/5194946/adrian-eufracio" target="_blank" rel="noopener">STACKOVERFLOW</a></li>
          <li><a href="https://www.instagram.com/adrian_eufracio/" target="_blank" rel="noopener">INSTAGRAM</a></li>
        </ul>
      </div>
    </IndexPage>
  )
}

export default Index