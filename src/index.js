import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import RegisterContainer from './routes/Register/RegisterContainer.js'
import Login from './routes/Login/Login.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Forgot from './routes/Forgot/Forgot.js'

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
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/register" component={RegisterContainer}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/forgot_password" component={Forgot}/>
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,

  document.getElementById('root')
)
