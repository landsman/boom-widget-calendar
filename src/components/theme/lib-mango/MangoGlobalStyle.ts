import { createGlobalStyle } from 'styled-components'

import { mangoGlobalResetStyles } from './MangoGlobalReset'

const MangoGlobalStyle = createGlobalStyle`
  /** Standardized CSS-reset styles to make website by-default same in all modern browsers */
  ${mangoGlobalResetStyles}

  :root {
      --main-font: 'Poppins', sans-serif;
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
`

export { MangoGlobalStyle }
