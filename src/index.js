import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import RegisterContainer from './routes/Register/RegisterContainer.js'


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
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RegisterContainer/>
    </ThemeProvider>
  </Provider>,

  document.getElementById('root')
)
