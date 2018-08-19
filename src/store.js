import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducer'

let Store = createStore(
  rootReducer,
  applyMiddleware(logger))

export default Store
