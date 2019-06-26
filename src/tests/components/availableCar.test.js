import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AvailableCar from '../../components/AvailableCar'

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme

const getPageParams = jest.fn()
const wrapper = shallow(
  <AvailableCar
    getPageParams={getPageParams}
    stockNumber={100}
    mileage={{ number: 100, unit: 'km' }}
    fuelTye={'Petrol'}
    color={'Yellow'}
    modelName={'Taurus'}
  />
)
test('should render AvailableCar correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render AvailableCar with alt data correctly', () => {
  wrapper.setProps({
    color: 'block'
  })
  expect(wrapper).toMatchSnapshot()
})
