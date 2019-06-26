import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Footer from '../../components/Footer'

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme

test('should render Footer correctly', () => {
  const wrapper = shallow(<Footer />)
  expect(wrapper).toMatchSnapshot()
})
