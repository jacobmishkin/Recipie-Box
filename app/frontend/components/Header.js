import Link from 'next/link';
import styled, { injectGlobal } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-family: 'Avenir Medium';
  font-weight: 600;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);

  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.lightGrey};
    color: ${props => props.theme.black};
    text-decoration: none;
    text-transform: uppercase;
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
    grid-template-columns: auto 1fr;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bśar {
    display: grid;
    grid-template-columns: 1fr auto;
    text-align: left;
    background: white;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Recipie Box</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>search</p>
    </div>
  </StyledHeader>
);

export default Header;
