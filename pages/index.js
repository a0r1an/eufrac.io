import Header from '../components/header'
import List from '../components/list'
import {fetchSanityFeed} from '../utils'

const sanityQuery = `*[_type == "post"]{
  _id,
  "mainImage": mainImage.asset->url,
  description,
  _createdAt,
  title
}`

class Index extends React.Component{
  
  static async getInitialProps() {
      let sanityData = await fetchSanityFeed(sanityQuery);
      return { sanityData }
  }
  render(){
    return (
    <div>
      <div className="container">
        <Header />
        <List data={this.props.sanityData} dataType="stories" />
        <ul>
          <li><a href="#">github</a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>
    </div>
    )
  }
}

export default Index