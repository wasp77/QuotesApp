

const initialState = {
  quotesList: [],
  error: null
}

export default function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTES_SUCCESS:
      return {
        ...state,
        quotesList: action.quotesList
      }
    case FETCH_QUOTES_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
