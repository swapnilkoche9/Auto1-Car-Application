import React from 'react'
import constants from '../constants/SystemConstants'
import { PaginationProps } from '../utils/interface'

class Pagination extends React.Component<PaginationProps, {}> {

  // go to the first page
  firstPage = () => {
    this.props.changePageNumber(1)
    this.props.getPageParams(1)
  }
  // go to the previous page
  previousPage = () => {
    const {
      currentPage
    } = this.props

    if (currentPage - 1 !== 0) {
      this.props.changePageNumber(currentPage - 1)
      this.props.getPageParams(currentPage - 1)
    } else {
      this.props.changePageNumber(1)
    }
  }

  // go to the last page

  lastPage = () => {
    const {
      totalPageCount
    } = this.props

    this.props.changePageNumber(totalPageCount)
    this.props.getPageParams(totalPageCount)
  }

  //  go to next page

  nextPage = () => {
    const {
      totalPageCount,
      currentPage
    } = this.props

    if (currentPage + 1 > totalPageCount) {
      this.props.changePageNumber(totalPageCount)
      this.props.getPageParams(totalPageCount)
    } else {
      this.props.changePageNumber(currentPage + 1)
      this.props.getPageParams(currentPage + 1)
    }
  }
  static defaultProps: { currentPage: number };

  render() {
    const {
      currentPage,
      totalPageCount
    } = this.props

    return (
      <div className='pagination'>
        <a href='#view details' className='paginationText orangeText' onClick={this.firstPage}>{constants.FIRST}</a>
        <a href='#view details' className='paginationText orangeText' onClick={this.previousPage}>{constants.PREVIOUS}</a>
        <a href='#view details' className='paginationText grayText'>{`${constants.PAGE_TEXT} ${currentPage} ${constants.OF_TEXT} ${totalPageCount}`}</a>
        <a href='#view details' className='paginationText orangeText' onClick={this.nextPage}>{constants.NEXT}</a>
        <a href='#view details' className='paginationText orangeText' onClick={this.lastPage}>{constants.LAST}</a>
      </div>
    )
  }
}

Pagination.defaultProps = {
  currentPage: 1
}

export default Pagination
