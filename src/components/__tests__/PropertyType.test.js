import React from 'react'
import {shallow} from 'enzyme'
import {PropertyType} from '../PropertyType'

function setup() {
  const props = {
    propertyType: 'SingleFamily'
  }

  let mockFn = jest.fn()
  PropertyType.prototype.handleChange = mockFn;
  const enzymeWrapper = shallow(<PropertyType {...props} />)

  return {
    mockFn,
    props,
    enzymeWrapper
  }
}

describe('property type input', () => {
  it('should render and have set value', () => {
    const {enzymeWrapper} = setup()
    let inputProps = enzymeWrapper.find('select').props()
    expect(inputProps.value).toEqual('SingleFamily')
  })
  it('should call handleChange on change', () => {
    const {enzymeWrapper, mockFn} = setup()
    let inputProps = enzymeWrapper.find('select').props()
    inputProps.onChange()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
