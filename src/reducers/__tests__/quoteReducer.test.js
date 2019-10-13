import {
  FETCH_QUOTES_BEGIN,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE
} from '../../actions/quoteActions'
import reducer from '../quoteReducer'

describe('quote reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      quotesList: [],
      loading: false,
      error: null
    })
  })
  it('should set loading', () => {
    expect(reducer({
      quotesList: [],
      loading: false,
      error: null
    }, {
      type: FETCH_QUOTES_BEGIN,
    })).toEqual({
      quotesList: [],
      loading: true,
      error: null
    })
  })
  it('should set the quotes list', () => {
    expect(reducer({
      quotesList: [],
      loading: true,
      error: null
    }, {
      type: FETCH_QUOTES_SUCCESS,
      quotesList: ['A test list']
    })).toEqual({
      quotesList: ['A test list'],
      loading: false,
      error: null
    })
  })
  it('should set an error', () => {
    expect(reducer({
      quotesList: [],
      loading: true,
      error: null
    }, {
      type: FETCH_QUOTES_FAILURE,
      error: 'A test error'
    })).toEqual({
      quotesList: [],
      loading: false,
      error: 'A test error'
    })
  })
})
