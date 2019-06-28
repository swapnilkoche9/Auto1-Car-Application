import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from '../../components/Button'

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme

const handleClick = jest.fn()
const wrapper = shallow(
  <Button
    handleClick={handleClick}
    text={'Save'}
  />
)
test('should render Button correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render Button with alt data correctly', () => {
  wrapper.setProps({
    text: 'Remove'
  })
  expect(wrapper).toMatchSnapshot()
})
