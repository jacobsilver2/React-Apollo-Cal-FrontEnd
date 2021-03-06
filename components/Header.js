import Link from 'next/link';
import styled from 'styled-components';
import {Query} from 'react-apollo';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';
import Sidebar from './Sidebar';
import Search from './Search';
import { CURRENT_USER_QUERY } from './User';
import User from './User';


Router.onRouteChangeStart = () => {
  NProgress.start();
} 
Router.onRouteChangeComplete = () => {
  NProgress.done();
}
Router.onRouteChangeError = () => {
  NProgress.done();
}

const Logo = styled.h1`
  font-size: 2.5rem;
  margin-left: 4rem;
  position: relative;
  z-index: 2;
  /* transform: skew(-7deg); */
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.mainColor};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
      .bar {
        border-bottom: 5px solid ${props => props.theme.black};
        display: grid;
        grid-template-columns: repeat(auto-fit, 1fr);
        justify-content: center;
        align-items: stretch;
        @media (max-width: 1300px){
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }
    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid ${props => props.theme.lightGrey};
    }
`;


const Header = () => (
  <User>
    { ({data: { me } }) => (
      <StyledHeader>
        <div className="bar">
          <Logo>
            {me && (
            <Link href="/">
              <a>{me.name}</a>
            </Link>
            )}
            {!me && (
            <Link href="/">
              <a>React-Cal</a>
            </Link>
            )}
          </Logo>
        </div>
        <div className="sub-bar">
          <Search />
        </div>
        <Sidebar />
      </StyledHeader>
    )}
  </User>
);

export default Header;