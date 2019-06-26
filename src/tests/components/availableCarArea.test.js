import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AvailableCarsArea from '../../components/AvailableCarsArea'

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme

const getPageParams = jest.fn()
const getSortFilterParams = jest.fn()
const wrapper = shallow(
  <AvailableCarsArea
    getPageParams={getPageParams}
    getSortFilterParams={getSortFilterParams}
    cars={[{
      stockNumber: 100,
      mileage: { number: 100, unit: 'km' },
      fuelType: 'Petrol',
      color: 'Yellow',
      modelName: 'Taurus'
    }]}
    totalPageCount={100}

  />
)
test('should render AvailableCarsArea correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render AvailableCarsArea with alt data correctly', () => {
  wrapper.setProps({
    color: 'block'
  })
  expect(wrapper).toMatchSnapshot()
})
