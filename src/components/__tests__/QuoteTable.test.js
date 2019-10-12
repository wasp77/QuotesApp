import React from 'react'
import {shallow} from 'enzyme'
import {QuoteTable} from '../QuoteTable'

function setup() {
  const props = {
    quotes: ['this is a test value']
  }

  const enzymeWrapper = shallow(<QuoteTable {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('quotes output table', () => {
  it('should render and have set data', () => {
    const {enzymeWrapper} = setup()
    let inputProps = enzymeWrapper.find('ReactTable').props()
    expect(inputProps.data).toEqual(['this is a test value'])
  })
})
