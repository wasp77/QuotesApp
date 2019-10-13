import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../quoteActions'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('quote actions', () => {
  it('should create an action to begin loading', () =>{
    const expectedAction = {
      type: actions.FETCH_QUOTES_BEGIN,
    }
    expect(actions.fetchQuoteBegin()).toEqual(expectedAction)
  })
  it('should create an action to set the list of quotes', () =>{
    const quotesList = []
    const expectedAction = {
      type: actions.FETCH_QUOTES_SUCCESS,
      quotesList: quotesList
    }
    expect(actions.fetchQuotesSuccess(quotesList)).toEqual(expectedAction)
  })
  it('should create an action to set an error', () =>{
    const error = 'unknown error'
    const expectedAction = {
      type: actions.FETCH_QUOTES_FAILURE,
      error: error
    }
    expect(actions.fetchQuotesFailure(error)).toEqual(expectedAction)
  })
})

describe('async action', () => {
  it('should execute fetchQuotes and succeed', () => {
    const store = mockStore({
      selection: {
        loanSize: 100000,
        creditScore: 700,
        propertyType: 'SingleFamily',
        occupancy: 'Primary'
      },
      quotes: {
        loading: false,
        quotesList: [],
        error: null
      }
    })
    store.dispatch(actions.fetchQuotes()).then(() => {
      let actionList = store.getActions()
      expect(actionList[0].type).toEqual(actions.FETCH_QUOTES_BEGIN)
      expect(actionList[1].type).toEqual(actions.FETCH_QUOTES_SUCCESS)
    })
  })
  it('should execute fetchQuotes and fail', () => {
    const store = mockStore({
      selection: {
        loanSize: 100000,
        creditScore: 100,
        propertyType: 'SingleFamily',
        occupancy: 'Primary'
      },
      quotes: {
        quotesList: [],
        error: null
      }
    })
    store.dispatch(actions.fetchQuotes()).then(() => {
      let actionList = store.getActions()
      expect(actionList[0].type).toEqual(actions.FETCH_QUOTES_BEGIN)
      expect(actionList[1].type).toEqual(actions.FETCH_QUOTES_FAILURE)
    })
  })
})
