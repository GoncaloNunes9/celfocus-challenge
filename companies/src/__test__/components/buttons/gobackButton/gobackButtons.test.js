import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import GoBackButton from '../../../../components/buttons/goBackButton';

describe('Button GoBack', () => {
  it('renders button to go back', () => {
    const wrapper = shallow(<GoBackButton />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})