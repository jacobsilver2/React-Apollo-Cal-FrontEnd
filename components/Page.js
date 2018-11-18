import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  mainColor: '#1a8fff',
  textColor: '#111',
  textColorLight: '#ccc',
  borderColor: '#eee',
  bgColor: '#f9f9f9',
  neutralColor: '#fff',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.textColor};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`

  @font-face {
    font-family: 'radnika-next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  

  @font-face {
    font-family: 'material-icons';
    src: url('https://fonts.googleapis.com/icon?family=Material+Icons') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html{
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  } 

  body {
    padding: 0;
    margin: 0;
    font-size: 1.1rem;
    line-height: 2;
    font-family: 'radnika-next';
    font-weight: 300;
    line-height: 1.5;
    color: ${theme.textColor};
    background: ${theme.bgColor};
    position: relative;
  }
  a {
    text-decoration: none;
    color: ${theme.textColor};
  }


`;


class Page extends Component {

  render() {
    return (
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <Header />
            <Inner>
              {this.props.children}
            </Inner>
          </StyledPage>
        </ThemeProvider>
    );
  }
}

export default Page;