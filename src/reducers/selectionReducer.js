
const initialState = {
  loanSize: 0,
  creditScore: 0,
  propertyType: 'SingleFamily',
  occupancy: 'Primary'
}

const propertyMap = {
  'Single Family': 'SingleFamily',
  'Condo': 'Condo',
  'Townhouse': 'Townhouse',
  'Multi Family': 'MultiFamily'
}

const occupancyMap = {
  'Primary Residence': 'Primary',
  'Secondary Residence': 'Secondary',
  'Investment Residence': 'Investment'
}

export default function selectionReducer(state = initialStatem, action) {
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
      let type = action.propertyType
      return {
        ...state,
        propertyType: propertyMap.type
      }
    case SET_OCCUPANCY:
      let type = action.occupancy
      return {
        ...state,
        occupancy: occupancyMap.type
      }
    default:
      return state
  }
}
