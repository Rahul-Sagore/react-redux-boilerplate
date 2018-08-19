import { combineReducers } from 'redux'

import counter from './Counter/CounterReducer'

const rootReducer = combineReducers({
  counter
})

export default rootReducer
