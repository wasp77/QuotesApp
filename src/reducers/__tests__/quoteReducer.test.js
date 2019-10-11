import {
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE
} from '../../actions/quoteActions'
import reducer from '../quoteReducer'

describe('quote reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      quotesList: [],
      error: null
    })
  })
  it('should set the quotes list', () => {
    expect(reducer({
      quotesList: [],
      error: null
    }, {
      type: FETCH_QUOTES_SUCCESS,
      quotesList: ['A test list']

    })).toEqual({
      quotesList: ['A test list'],
      error: null
    })
  })
  it('should set an error', () => {
    expect(reducer({
      quotesList: [],
      error: null
    }, {
      type: FETCH_QUOTES_FAILURE,
      error: 'A test error'

    })).toEqual({
      quotesList: [],
      error: 'A test error'
    })
  })
})
