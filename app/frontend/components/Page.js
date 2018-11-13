import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  black: '#393939',
  baseGrey: '#3A3A3A',
  formGrey: '#F2F2F2',
  placeholderGrey: '#727272',
  lightGrey: '#E1E2E1',
  offWhite: '#EDEDED',
  maxWidth: '1200px',
  bs: '0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,0.07)',
};
injectGlobal`
  @font-face {
    font-family: 'Avenir Light';
    src: url('/static/Avenir_Light.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Avenir Medium';
    src: url('/static/Avenir_Medium.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Avenir Light';
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`;
const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
