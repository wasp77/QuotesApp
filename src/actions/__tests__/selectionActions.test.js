import * as actions from '../selectionActions'

describe('actions', () => {
  it('should create an action to set the loan size', () => {
    const loanSize = 10000
    const expectedAction = {
      type: actions.SET_LOAN_SIZE,
      loanSize: loanSize
    }
    expect(actions.setLoanSize(loanSize)).toEqual(expectedAction)
  })
  it('should create an action to set the credit score', () => {
    const creditScore = 700
    const expectedAction = {
      type: actions.SET_CREDIT_SCORE,
      creditScore: creditScore
    }
    expect(actions.setCreditScore(creditScore)).toEqual(expectedAction)
  })
  it('should create an action to set the property type', () => {
    const propertyType = 'SingleFamily'
    const expectedAction = {
      type: actions.SET_PROPERTY_TYPE,
      propertyType: propertyType
    }
    expect(actions.setPropertyType(propertyType)).toEqual(expectedAction)
  })
  it('should create an action to set the occupancy type', () => {
    const occupancy = 'Primary'
    const expectedAction = {
      type: actions.SET_OCCUPANCY,
      occupancy: occupancy
    }
    expect(actions.setOccupancy(occupancy)).toEqual(expectedAction)
  })
})
