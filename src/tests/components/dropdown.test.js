import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dropdown from '../../components/Dropdown'

jest.genMockFromModule('uniqid')
Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme

const getFilterParams = jest.fn()
const wrapper = shallow(
  <Dropdown
    dropdownContent={['content']}
    defaultDropdownTitle={{ title: 'title' }}
    getFilterParams={getFilterParams}
  />
)
test('should render Dropdown correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render Dropdown with alt data correctly', () => {
  wrapper.setProps({
    dropdownContent: ['another content'],
    defaultDropdownTitle: { title: 'another title' }
  })
  expect(wrapper).toMatchSnapshot()
})
