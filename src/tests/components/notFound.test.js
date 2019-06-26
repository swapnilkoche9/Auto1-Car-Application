import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import PageNotFound from '../../components/PageNotFound'

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme

test('should render NotFound correctly', () => {
  const wrapper = shallow(<PageNotFound />)
  expect(wrapper).toMatchSnapshot()
})
