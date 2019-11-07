import Link from 'next/link'
import styled from 'styled-components'
import moment from 'moment';

const StoryTeaser = styled.div`
  margin: 0 0 3rem;
  .imgContainer {
    margin: 0 0 2em;
    img {
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: [abc] 1fr [bca] 3fr [end];
    grid-column-gap: 3rem;
    grid-template-rows: [first] 1fr [second] auto;
    grid-template-areas: "column-2 column-1";
    .imgContainer { grid-area: column-1; }
    .contentContainer { 
      padding: 2rem 0 0 4rem;
      grid-area: column-2; 
    }

  }
`
class StoriesTeaser extends React.Component {
  render() {
    return (
      <StoryTeaser>
        <h3>
          <Link href="/story/[name]/[id]" as={`/story/${this.props.content.title}/${this.props.content.id}`}>
            <a>{this.props.content.title}</a>
          </Link>
        </h3>
        <span className="date">{moment(this.props.content.publishedAt).format('MMMM Do YYYY')}</span>
        <div className="contentContainer">
          <p>{this.props.content.description}</p>
        </div>
      </StoryTeaser>
    );
  }
}
export default StoriesTeaser