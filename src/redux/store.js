import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import register from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
    register,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

  export default store
