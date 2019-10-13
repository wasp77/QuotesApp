import {
  FETCH_QUOTES_BEGIN,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE
} from '../actions/quoteActions'

const initialState = {
  quotesList: [],
  loading: false,
  error: null
}

export default function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_QUOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        quotesList: action.quotesList,
      }
    case FETCH_QUOTES_FAILURE:
      return {
        ...state,
        loading: false,
        quotesList: [],
        error: action.error
      }
    default:
      return state
  }
}
