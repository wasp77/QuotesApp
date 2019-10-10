import axios from 'axios'

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

export function fetchQuotes() {
  return function(dispatch, getState) {
    const state = getState()
    axios({
      method: 'get',
      url: 'https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes',
      headers: {'Authorization': 'RG-AUTH 5ec94be8-9e27-454e-95e4-c5c5eb54bf1e'},
      params: {
        loanSize: state.selection.loanSize,
        creditScore: state.selection.creditScore,
        propertyType: state.selection.propertyType,
        occupancy: state.selection.occupancy
      }
    })
      .then(function(response) {
        dispatch(fetchQuotesSuccess(response.data.rateQuotes))
      })
      .catch(function(error) {
        dispatch(fetchQuotesFailure(error))
      })
  }
}
