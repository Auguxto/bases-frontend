import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  font-size: 16px;
  }

  body {
    background-color:#F7F7F7 ;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Ubuntu', sans-serif;
    outline: 0;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
