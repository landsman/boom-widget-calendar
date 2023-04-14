import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle<{ bodyBackground?: string, selectedDayColor?: string }>`
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

  body::-webkit-scrollbar {
    width: 0.5em;
  }

  body::-webkit-scrollbar-track {
    background-color: ${(props) => props.bodyBackground ? props.bodyBackground : '#F5F5F5'};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.bodyBackground ? props.selectedDayColor : '#000000'};
  }
`;
