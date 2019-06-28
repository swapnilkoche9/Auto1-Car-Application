import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Pagination from '../../components/Pagination'

Enzyme.configure({ adapter: new Adapter() })
const { shallow } = Enzyme
let getPageParams
let wrapper
let changePageNumber
beforeEach(() => {
  getPageParams = jest.fn()
  changePageNumber = jest.fn()
  wrapper = shallow(
    <Pagination
      getPageParams={getPageParams}
      totalPageCount={100}
      currentPage={1}
      changePageNumber={changePageNumber}
    />
  )
})
test('should render Pagination correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render Pagination with alt data correctly', () => {
  wrapper.setProps({
    totalPageCount: 5
  })
  expect(wrapper).toMatchSnapshot()
})

test('should increase the current page by 1', () => {
  wrapper.setProps({
    currentPage: 1
  })
  const instance = wrapper.instance()
  instance.nextPage()
  expect(changePageNumber).toHaveBeenCalled()
  expect(getPageParams).toHaveBeenCalled()
})

test('should decrease the current page by 1', () => {
  wrapper.setProps({
    currentPage: 10
  })
  const instance = wrapper.instance()
  instance.previousPage()
  expect(changePageNumber).toHaveBeenCalled()
  expect(getPageParams).toHaveBeenCalled()
})

test('should skip to the first page', () => {
  wrapper.setProps({
    currentPage: 1
  })
  const instance = wrapper.instance()
  instance.firstPage()
  expect(changePageNumber).toHaveBeenCalled()
  expect(getPageParams).toHaveBeenCalled()
})

test('should skip to the last page', () => {
  wrapper.setProps({
    currentPage: 100
  })
  const instance = wrapper.instance()
  instance.lastPage()
  expect(changePageNumber).toHaveBeenCalled()
  expect(getPageParams).toHaveBeenCalled()
})
