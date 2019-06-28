import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CarFiltersArea from '../../components/CarFiltersArea'

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme

const getColorsFilterParams = jest.fn()
const getManufacturersFilterParams = jest.fn()
const getFilteredCarList = jest.fn()
const wrapper = shallow(
  <CarFiltersArea
    colors={['Yellow']}
    manufacturers={['BMW']}
    getColorsFilterParams={getColorsFilterParams}
    getManufacturersFilterParams={getManufacturersFilterParams}
    getFilteredCarList={getFilteredCarList}
  />
)
test('should render CarFiltersArea correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render CarFiltersArea with alt data correctly', () => {
  wrapper.setProps({
    totalPageCount: 5
  })
  expect(wrapper).toMatchSnapshot()
})
