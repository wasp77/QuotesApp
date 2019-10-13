import {
  SET_LOAN_SIZE,
  SET_CREDIT_SCORE,
  SET_PROPERTY_TYPE,
  SET_OCCUPANCY
} from '../actions/selectionActions'

const initialState = {
  loanSize: '',
  creditScore: '',
  propertyType: 'SingleFamily',
  occupancy: 'Primary',
}

export default function selectionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOAN_SIZE:
      if (isNaN(action.loanSize)) {
        return state
      } else {
        return {
          ...state,
          loanSize: action.loanSize
        }
      }
    case SET_CREDIT_SCORE:
      if (isNaN(action.creditScore)) {
        return state
      } else {
        return {
          ...state,
          creditScore: action.creditScore
        }
      }
    case SET_PROPERTY_TYPE:
      return {
        ...state,
        propertyType: action.propertyType
      }
    case SET_OCCUPANCY:
      return {
        ...state,
        occupancy: action.occupancy
      }
    default:
      return state
  }
}
