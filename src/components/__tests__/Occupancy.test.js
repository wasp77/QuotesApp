import React from 'react'
import {shallow} from 'enzyme'
import {Occupancy} from '../Occupancy'

function setup() {
  const props = {
    occupancy: 'Primary'
  }

  // Mock function to spy on if the handleChange function is called in the component 
  let mockFn = jest.fn()
  Occupancy.prototype.handleChange = mockFn;
  const enzymeWrapper = shallow(<Occupancy {...props} />)

  return {
    mockFn,
    props,
    enzymeWrapper
  }
}

describe('occupancy type input', () => {
  it('should render and have set value', () => {
    const {enzymeWrapper} = setup()
    let inputProps = enzymeWrapper.find('[as="select"]').props()
    expect(inputProps.value).toEqual('Primary')
  })
  it('should call handleChange on change', () => {
    const {enzymeWrapper, mockFn} = setup()
    let inputProps = enzymeWrapper.find('[as="select"]').props()
    inputProps.onChange()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
