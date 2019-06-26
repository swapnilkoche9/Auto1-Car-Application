import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CarHome from '../../container/CarHome'

const state = {
  cars: [{ modelName: 'i3' }],
  totalPageCount: 100,
  colors: ['yellow'],
  manufacturers: ['BMW']
}
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore(state)

jest.genMockFromModule('uniqid')
Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme

const carsActions = {
  getAllCars: jest.fn()
}
const colorsActions = jest.fn()
const manufacturersActions = jest.fn()
const dispatch = jest.fn()

const wrapper = shallow(
  <CarHome
    store={store}
    colorsActions={colorsActions}
    manufacturersActions={manufacturersActions}
    carsActions={carsActions}
  />
)
test('should render Homepage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render Homepage with alt data correctly', () => {
  wrapper.setProps({
    colors: ['yellow', 'red']
  })
  expect(wrapper).toMatchSnapshot()
})
