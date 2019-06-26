import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import Reducers from '../reducers'

const loggerMiddleware = createLogger()

const Store = createStore(Reducers, compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
))

export default Store
