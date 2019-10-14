import React from 'react'
import {shallow} from 'enzyme'
import {CreditScore} from '../CreditScore'

function setup() {
  const props = {
    creditScore: 700
  }

  // Mock function to spy on if the handleChange function is called in the component
  let mockFn = jest.fn()
  CreditScore.prototype.handleChange = mockFn;
  const enzymeWrapper = shallow(<CreditScore {...props} />)

  return {
    mockFn,
    props,
    enzymeWrapper
  }
}

describe('credit score input', () => {
  it('should render and have set value', () => {
    const {enzymeWrapper} = setup()
    let inputProps = enzymeWrapper.find('[type="number"]').props()
    expect(inputProps.value).toEqual(700)
  })
  it('should call handleChange on change', () => {
    const {enzymeWrapper, mockFn} = setup()
    let inputProps = enzymeWrapper.find('[type="number"]').props()
    inputProps.onChange()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
