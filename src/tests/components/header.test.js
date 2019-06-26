import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Header from '../../components/Header'

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
})
