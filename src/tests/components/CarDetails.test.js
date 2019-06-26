import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import CarDetails from '../../container/CarDetails'

Enzyme.configure({ adapter: new Adapter() })
const { shallow} = Enzyme

// create any initial state needed
const initialState = {}; 
// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();
let wrapper;
let store;
beforeEach(() => {
  //creates the store with any initial state or middleware needed  
  store = mockStore(initialState)
  wrapper = shallow(<CarDetails store={store}  />)
 })

test('should render CardDetails correctly', () => {
   expect(wrapper).toMatchSnapshot()
})

test('should render CardDetails with alt data correctly', () => {
  wrapper.setProps({
    isFetchingCars: false
  })
  expect(wrapper).toMatchSnapshot()
})


