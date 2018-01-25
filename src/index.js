import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import { Provider } from 'react-redux'
import Register from './routes/Register/Register.js'
import Login from './routes/Login/Login.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Forgot from './routes/Forgot/Forgot.js'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

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

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunkMiddleware)
)


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/forgot_password" component={Forgot}/>
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,

  document.getElementById('root')
)
