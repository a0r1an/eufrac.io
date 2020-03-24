import Link from 'next/link'
import styled from 'styled-components'
import moment from 'moment';

const PostTeaser = styled.div`
  margin: 0 0 3rem;
  a {
    display: block;
    padding: 4em;
    border-left: 5px solid #ff4444;
    text-decoration: none;
    transition: .25s box-shadow, .35s background;
    &:hover {
      background: #ff4444;
      h3{
        color: #FFFFFF;
      }
      box-shadow: 10px 0px 15px #0000001c;
    }
    &:active {
      box-shadow: 10px 0px 15px #00000045;
    }
  }
  h3 {
    color: #000;
    font-size: 3em;
    margin: 0 0 1rem;
    
  }
  .date{
    font-size: 1.2em;
    color: #000000;
  }
  .contentContainer {
    font-size: 1.5em;
    font-family: 'Raleway', sans-serif;
    color: #000000;
  }
`
export default class extends React.Component {
  render() {
    return (
      <PostTeaser>
        <Link href="/post/[name]/[id]" as={`/post/${this.props.content.slug.current}/${this.props.content.id}`}>
          <a>
            <h3>{this.props.content.title}</h3>
            <span className="date">{moment(this.props.content.publishedAt).format('MMMM Do YYYY')}</span>
            <div className="contentContainer">
              <p>{this.props.content.description}</p>
            </div>
          </a>
        </Link>
      </PostTeaser>
    );
  }
}