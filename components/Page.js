import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  mainColor: '#1a8fff',
  textColor: '#373a42',
  textColorLight: '#ccc',
  borderColor: '#eee',
  bgColor: '#eeecf0',
  neutralColor: '#fff',
  maxWidth: '90vw',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  offWhite: '#EDEDED',
  red: '#FF0000',
  black: '#373a42',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  highlighted: '#fff',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: .8rem;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 100;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }

  .modal-cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    transform: translateZ(0);
    background-color: rgba(0, 0, 0, 0.8);
  }

  .modal-area {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 2.5em 1.5em 1.5em 1.5em;
    background-color: #ffffff;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .tag {
  background: #eee;
  border-radius: 3px 0 0 3px;
  color: #999;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
}

.tag::before {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: '';
  height: 6px;
  left: 10px;
  position: absolute;
  width: 6px;
  top: 10px;
}

.tag::after {
  background: #fff;
  border-bottom: 13px solid transparent;
  border-left: 10px solid #eee;
  border-top: 13px solid transparent;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
}

.tag:hover {
  background-color: '#1a8fff';
  color: white;
}

.tag:hover::after {
   border-left-color: '#1a8fff'; 
}

  @media screen and (min-width: 500px) {
    /* Center the Modal! */
    .modal-area {
      left: 50%;
      top: 50%;
      height: auto;
      transform: translate(-50%, -50%);
      max-width: calc(100% - 20em);
      max-height: calc(100% - 1em);
    }
  }

  ._modal-close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5em;
    line-height: 1;
    background: #f6f6f7;
    border: 0;
    box-shadow: 0;
    cursor: pointer;
  }

  ._modal-close-icon {
    width: 25px;
    height: 25px;
    fill: transparent;
    stroke: black;
    stroke-linecap: round;
    stroke-width: 2;
  }

  .modal-body {
    padding-top: 0.25em;
  }
  ._hide-visual {
    border: 0 !important;
    clip: rect(0 0 0 0) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }

  .scroll-lock {
    overflow: hidden;
    margin-right: 17px;
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