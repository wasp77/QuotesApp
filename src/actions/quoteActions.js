import axios from 'axios'

export const FETCH_QUOTES_BEGIN = 'FETCH_QUOTES_BEGIN'
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS'
export const FETCH_QUOTES_FAILURE = 'FETCH_QUOTES_FAILURE'

// Action for beginning of API call
export const fetchQuoteBegin = () => ({
  type: FETCH_QUOTES_BEGIN
})

// Action for modifying the list of quotes after successful API call
export const fetchQuotesSuccess = quotes => ({
  type: FETCH_QUOTES_SUCCESS,
  quotesList: quotes
})

// Action for setting the error upon failure of the API call
export const fetchQuotesFailure = error => ({
  type: FETCH_QUOTES_FAILURE,
  error: error
})

// Action for querying the API with the selected values 
export function fetchQuotes() {
  return function(dispatch, getState) {
    dispatch(fetchQuoteBegin())
    const state = getState()
    return axios({
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
