import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from './utils/theme'

import Register from './routes/Register/Register.js'


// Global style
// eslint-disable-next-line
injectGlobal`
body {
  font-family: Martel, serif;
  line-height: 24px;
  color: ${theme.color.gray_d};

  a {
    color: inherit;
  }
}

`


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Register/>
  </ThemeProvider>,

  document.getElementById('root')
)
