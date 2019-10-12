import React from 'react'
import {shallow} from 'enzyme'
import {LoanSize} from '../LoanSize'

function setup() {
  const props = {
    loanSize: 10000
  }

  let mockFn = jest.fn()
  LoanSize.prototype.handleChange = mockFn;
  const enzymeWrapper = shallow(<LoanSize {...props} />)

  return {
    mockFn,
    props,
    enzymeWrapper
  }
}

describe('loan size input', () => {
  it('should render and have set value', () => {
    const {enzymeWrapper} = setup()
    let inputProps = enzymeWrapper.find('input').props()
    expect(inputProps.value).toEqual(10000)
  })
  it('should call handleChange on change', () => {
    const {enzymeWrapper, mockFn} = setup()
    let inputProps = enzymeWrapper.find('input').props()
    inputProps.onChange()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
