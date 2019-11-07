import Link from 'next/link'
import styled from 'styled-components'
const HeaderArea = styled.header`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  h1 {
    padding: 1rem 0;
    margin: 0;
    width: 150px;
    margin: 0 auto;
  }
`
class Header extends React.Component{
  render(){
    return (
      <HeaderArea>
        <div className="logo">
          <h1>
            <Link href="/index">
              <a>
                eufrac.io
              </a>
            </Link>
          </h1>
          <span>mi blog</span>
        </div>
      </HeaderArea>
    )
  }
}
export default Header