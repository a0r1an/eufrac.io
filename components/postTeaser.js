import Link from 'next/link'
import styled from 'styled-components'
import moment from 'moment';

const PostTeaser = styled.div`
  margin: 0 0 3rem;
  h3 {
    font-size: 3em;
    margin: 0 0 1rem;
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.primary};
      &:hover {
        color: ${props => props.theme.colors.primaryDarker};
      }
    }
  }
  .date{
    font-size: 1.2em;
  }
  .contentContainer {
    font-size: 1.5em;
    font-family: 'Raleway', sans-serif;
  }
`
export default class extends React.Component {
  render() {
    return (
      <PostTeaser>
        <h3>
          <Link href="/post/[name]/[id]" as={`/post/${this.props.content.slug.current}/${this.props.content.id}`}>
            <a>{this.props.content.title}</a>
          </Link>
        </h3>
        <span className="date">{moment(this.props.content.publishedAt).format('MMMM Do YYYY')}</span>
        <div className="contentContainer">
          <p>{this.props.content.description}</p>
        </div>
      </PostTeaser>
    );
  }
}