import {combineReducers} from 'redux'
import quotes from './quoteReducer'
import selection from './selectionReducer'

export default combineReducers({
  selection,
  quotes
})
