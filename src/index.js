import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import { Provider } from 'react-redux'
import Register from './routes/Register'
import Login from './routes/Login'
import Forgot from './routes/Forgot'
import App from './routes/App.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import PrivateRoute from './shared/PrivateRoute.js'

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
          <PrivateRoute exact path="/" component={App}/>
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,

  document.getElementById('root')
)
