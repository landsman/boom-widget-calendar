import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle<{ bodyBackground?: string }>`
  html {
    scroll-behavior: smooth;
  }
  
  html, body {
    width: 100%;
    height: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${(props) => props.bodyBackground ? props.bodyBackground : 'transparent'};
  }
`;
