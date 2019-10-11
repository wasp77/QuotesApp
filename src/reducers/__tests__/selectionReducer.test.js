import {
  SET_LOAN_SIZE,
  SET_CREDIT_SCORE,
  SET_PROPERTY_TYPE,
  SET_OCCUPANCY
} from '../../actions/selectionActions'
import reducer from '../selectionReducer'

describe('selection reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loanSize: 0,
      creditScore: 0,
      propertyType: 'SingleFamily',
      occupancy: 'Primary',
      valid: true
    })
  })
  it('should set loan size', () => {
    expect(reducer({
    loanSize: 0,
    creditScore: 0,
    propertyType: 'SingleFamily',
    occupancy: 'Primary',
    valid: true}, {
      type: SET_LOAN_SIZE,
      loanSize: 10000
    })).toEqual({
      loanSize: 10000,
      creditScore: 0,
      propertyType: 'SingleFamily',
      occupancy: 'Primary',
      valid: true
    })
  })
  it('should set credit score', () => {
    expect(reducer({
    loanSize: 0,
    creditScore: 0,
    propertyType: 'SingleFamily',
    occupancy: 'Primary',
    valid: true}, {
      type: SET_CREDIT_SCORE,
      creditScore: 700
    })).toEqual({
      loanSize: 0,
      creditScore: 700,
      propertyType: 'SingleFamily',
      occupancy: 'Primary',
      valid: true
    })
  })
  it('should set property type', () => {
    expect(reducer({
    loanSize: 0,
    creditScore: 0,
    propertyType: 'SingleFamily',
    occupancy: 'Primary',
    valid: true}, {
      type: SET_PROPERTY_TYPE,
      propertyType: 'Condo'
    })).toEqual({
      loanSize: 0,
      creditScore: 0,
      propertyType: 'Condo',
      occupancy: 'Primary',
      valid: true
    })
  })
  it('should set occupancy type', () => {
    expect(reducer({
    loanSize: 0,
    creditScore: 0,
    propertyType: 'SingleFamily',
    occupancy: 'Primary',
    valid: true}, {
      type: SET_OCCUPANCY,
      occupancy: 'Secondary'
    })).toEqual({
      loanSize: 0,
      creditScore: 0,
      propertyType: 'SingleFamily',
      occupancy: 'Secondary',
      valid: true
    })
  })
})
