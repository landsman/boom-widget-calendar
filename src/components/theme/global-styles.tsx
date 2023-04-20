import {createGlobalStyle, css} from "styled-components";
import {mangoGlobalResetStyles} from "@local/components/theme/lib-mango/MangoGlobalReset";

type PropTypes = {
    mainFontSafeValue: string;
    scrolling?: boolean;
};

export const GlobalStyle = createGlobalStyle<PropTypes>`
  /** Standardized CSS-reset styles to make website by-default same in all modern browsers */
  ${mangoGlobalResetStyles}

  :root {
      --main-font: ${(props) => props.mainFontSafeValue};
      --second-font: 'Open Sans', sans-serif;
  }

  * {
      box-sizing: border-box;
      scroll-behavior: smooth;
  }

  html, body {
      font-family: var(--main-font);
      padding: 0;
      margin: 0;
  }

  // support to disable scrolling inside iframe
  ${({ scrolling }) => scrolling && css`
    html, body {
      overflow: ${( scrolling ) => scrolling ? 'auto' : ' hidden'};
    }
  `}
`;
