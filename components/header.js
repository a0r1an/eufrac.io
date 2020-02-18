import Link from 'next/link'
import styled from 'styled-components'
import {animateElementsKeyFrame} from '../libs/animation.js'

const HeaderArea = styled.header`
  margin: 0 0 6rem;
  h1 {
    padding: 0;
    margin: 0 0 .5rem;
    font-size: 3rem;
    a {
      color: #000;
      text-decoration: none;
    }
    span {
      display: inline-block;
      height: 0%;
    }
  }
`
export default class extends React.Component{
  constructor(props) {
    super(props);
    // this.characterE = React.createRef();
  }
  componentDidMount() {
    animateElementsKeyFrame([this.characterE],'4000','translateY',-20,'spring(1, 80, 10, 0)');
    animateElementsKeyFrame([this.characterU],'4000','translateY',-20,'spring(1, 80, 10, 0)');
    animateElementsKeyFrame([this.characterF],'4000','translateY',-20,'spring(1, 80, 10, 0)');
    animateElementsKeyFrame([this.characterR],'4000','translateY',-20,'spring(1, 80, 10, 0)');
    animateElementsKeyFrame([this.characterA],'4000','translateY',-20,'spring(1, 80, 10, 0)');
    animateElementsKeyFrame([this.characterC],'4000','translateY',-20,'spring(1, 80, 10, 0)');
    animateElementsKeyFrame([this.characterI],'4000','translateY',-20,'spring(1, 80, 10, 0)');
    animateElementsKeyFrame([this.characterO],'4000','translateY',-20,'spring(1, 80, 10, 0)');
  }
  render(){
    return (
      <HeaderArea>
        <div className="logo">
          <h1>
            <Link href="/index">
              <a>
                <span ref={characterE => (this.characterE = characterE)}>e</span>
                <span ref={characterU => (this.characterU = characterU)}>u</span>
                <span ref={characterF => (this.characterF = characterF)}>f</span>
                <span ref={characterR => (this.characterR = characterR)}>r</span>
                <span ref={characterA => (this.characterA = characterA)}>a</span>
                <span ref={characterC => (this.characterC = characterC)}>c</span>
                <span ref={characterI => (this.characterI = characterI)}>i</span>
                <span ref={characterO => (this.characterO = characterO)}>o</span>
              </a>
            </Link>
          </h1>
          <span>mi blog</span>
        </div>
      </HeaderArea>
    )
  }
}