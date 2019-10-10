
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS'
export const FETCH_QUOTES_FAILURE = 'FETCH_QUOTES_FAILURE'

export const fetchQuotesSuccess = quotes => ({
  type: FETCH_QUOTES_SUCCESS,
  quotesList: quotes
})

export const fetchQuotesFailure = error => ({
  type: FETCH_QUOTES_FAILURE,
  error: error
})
