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
      <Header />
      <List data={this.props.sanityData} dataType="stories" />
    </div>
    )
  }
}

export default Index