import React from 'react'
import toJson from 'enzyme-to-json';
import { CompanyService } from '../../../services/company.service';
import Companies  from '../../../views/companies/index';
import { shallow } from 'enzyme'

const data = [
  {
      "id": 1,
      "name": "Local Public Office",
      "vatin": "500754012"
  },
  {
      "id": 2,
      "name": "Real Estate Franchising",
      "vatin": "500754042"
  },
  {
      "id": 3,
      "name": "Car Wash",
      "vatin": "500754043"
  },
  {
      "id": 4,
      "name": "Engineering Company",
      "vatin": "500754044"
  },
  {
      "id": 4,
      "name": "Delivery Company",
      "vatin": "500754045"
  }
]


describe('Companies', () => {

  it('renders companies table2', () => {
    const component = shallow(<Companies/>)
    let spy = jest.spyOn(CompanyService, 'fetch').mockImplementation(() => data)
    component.instance().forceUpdate()
    expect(toJson(component)).toMatchSnapshot()
  })
})

