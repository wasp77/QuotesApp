export const SET_LOAN_SIZE = "SET_LOAN_SIZE"
export const SET_CREDIT_SCORE = "SET_CREDIT_SCORE"
export const SET_PROPERTY_TYPE = "SET_PROPERTY_TYPE"
export const SET_OCCUPANCY = "SET_OCCUPANCY"


export const setLoanSize = loanSize => ({
  type: SET_LOAN_SIZE,
  loanSize: loanSize
})

export const setCreditScore = creditScore => ({
  type: SET_CREDIT_SCORE,
  creditScore: creditScore
})

export const setPropertyType = propertyType => ({
  type: SET_PROPERTY_TYPE,
  propertyType: propertyType
})

export const setOccupancy = occupancy => ({
  type: SET_OCCUPANCY,
  occupancy: occupancy
})
