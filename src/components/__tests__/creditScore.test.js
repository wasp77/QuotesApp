import React from 'react'
import {shallow} from 'enzyme'
import {CreditScore} from '../CreditScore'

function setup() {
  const props = {
    creditScore: 700
  }

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
    let inputProps = enzymeWrapper.find('input').props()
    expect(inputProps.value).toEqual(700)
  })
  it('should call handleChange on change', () => {
    const {enzymeWrapper, mockFn} = setup()
    let inputProps = enzymeWrapper.find('input').props()
    inputProps.onChange()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
