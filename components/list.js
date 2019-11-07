import Link from 'next/link'
import StoriesTeaser from './storiesTeaser'
import styled from 'styled-components'

const BlogList = styled.section`
  background: #f7f7f7;
  padding: 4rem 2rem;
  position: relative;
  min-height: 600px;
  .container {
    position: relative;
    z-index: 1;
  }
  .hiddenBackground{
    position: absolute;
    width: 90%;
    left: 5%;
    height: 0%;
    background: #fff;
    /* top: 5%;
    left: 5%; */
    z-index:0;
  }
  h2 {
    z-index:1;
    color: #00000042;
    font-size: .875em;
    text-transform: uppercase;
    font-family: 'Roboto slab', serif;
    letter-spacing: 1px;
    margin: 0 0 2rem;
    position: relative;
    display: inline-block;
    .border {
      background-color: #00000042; 
      bottom: 0;
      content: '';
      display: block;
      height: 2px;
      left: 0;
      bottom: -10px;
      position: absolute;
      /* transform: translate(-50%,0); */
      width: 0px;
    }
  }
  h3 {
    margin: 0 0 2rem;
    font-size: 1.5em;
      color: #000;
    a {
      color: #000;
      text-decoration: none;
    }
  }
  .date{
    color: #acacac;
  }
  .grid-two {
    margin: 0 2rem 2rem;
    display: grid;
    grid-template-rows: [first] 1fr [second] 1fr [end];
    grid-row-gap: 3rem;
  }
  .button {
    display: block;
    background: #000;
    color: #fff;
    text-decoration: none;
    max-width: 200px;
    width: 100%;
    text-align:center;
    padding: 10px 0;
    margin: 0 auto;
    max-height: 20px;
  }
  @media (min-width: 1024px) {
    h2 {
      transform: translateY(0px);
    }
    .grid-two {
      display: grid;
      grid-template-columns: [abc] 1fr [bca] 1fr [end];
      grid-column-gap: 3rem;
      grid-template-rows: [first] 1fr [second] auto;
    }
    .buttonContainer {
      grid-column-start: abc;
      margin: 0 auto;
      grid-column-end: end;
    }
  }
`

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, dataType } = this.props;
    if (data.length < 1) {
      return <div>
        <h2>Latest {dataType}</h2>
        <p>Sorry, No {dataType} to show...</p>
      </div>;
    }
    return (
      <BlogList>
        <div className="container">
          <div className="sectionoff">
            {data.map(item =>
              <StoriesTeaser key={item.id} content={item} />
            )}
          </div>
        </div>
      </BlogList>
    );
  }
}
export default List