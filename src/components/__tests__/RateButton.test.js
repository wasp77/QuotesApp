import React from 'react'
import {shallow} from 'enzyme'
import {RateButton} from '../RateButton'

describe('Rates button', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<RateButton />)
    expect(enzymeWrapper.find('[type="submit"]').text()).toEqual('Quote Rates')
  })
})
