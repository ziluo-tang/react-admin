/**
 * 创建Store
 */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer.js'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware() //创建saga中间件

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV === 'development') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    const { logger } = require('redux-logger')
    middleware.push(logger)
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export default (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  )
  sagaMiddleware.run(rootSaga)
  return store
}
