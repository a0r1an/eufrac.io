import Header from '../components/header'
import PostTeaser from '../components/postTeaser'
import styled from 'styled-components'
import {fetchSanityFeed} from '../utils'

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

const sanityQuery = `*[_type == "post"] | order(_createdAt desc){
  _id,
  "mainImage": mainImage.asset->url,
  description,
  _createdAt,
  title,
  slug
}`

export default class extends React.Component{
  
  static async getInitialProps() {
      let sanityData = await fetchSanityFeed(sanityQuery);
      return { sanityData }
  }
  render(){
    let blogData = this.props.sanityData;
    return (
    <IndexPage>
      <div className="container">
        <Header />
        <ul className="blogList">
          {blogData.map(item => 
            <li key={item.id} >
              <PostTeaser key={item.id} content={item} />
            </li>
          )}
        </ul>
        <ul className="socialList">
          <li><a href="https://github.com/a0r1an" target="_blank">GITHUB</a></li>
          <li><a href="https://stackoverflow.com/users/5194946/adrian-eufracio" target="_blank">STACKOVERFLOW</a></li>
          <li><a href="https://www.instagram.com/adrian_eufracio/" target="_blank">INSTAGRAM</a></li>
        </ul>
      </div>
    </IndexPage>
    )
  }
}