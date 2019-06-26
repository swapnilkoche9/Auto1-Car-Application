import React from 'react'
import AvailableCar from './AvailableCar'
import Pagination from './Pagination'
import Dropdown from './Dropdown'
import constants from '../constants/SystemConstants'
import {AvailableCarsAreaProps,Car,Cars} from '../utils/interface'


const sortDropDownContent = [constants.NONE_SORT_ORDER, constants.ASC_SORT_ORDER, constants.DES_SORT_ORDER]
let renderAvailableCars = (cars:Cars) => {
  return cars && cars.map((car:Car, index:number) => {
    const {
      stockNumber,
      mileage,
      fuelType,
      color,
      modelName,
      pictureUrl
    } = car
    return (
      <AvailableCar
        key={index}
        stockNumber={stockNumber}
        mileage={mileage}
        fuelType={fuelType}
        color={color}
        modelName={modelName}
        pictureUrl={pictureUrl}
      />
    )
  })
}

const AvailableCarsArea = (props:AvailableCarsAreaProps) => {
  const {
    cars,
    totalPageCount,
    currentPage,
    changePageNumber,
    totalCarCount,
    getPageParams,
    getSortFilterParams
  } = props

  return (
    <div className='availableCarsContainer'>
      <div className="availableTextAndSortContainer">
        <div className="availableTextAndResultContainer">
          <div className="availableTextContainer">
            <p className='availableText'>{constants.AVAILABLE_CARS_TEXT}</p>
          </div>
          <div className="resultTextContainer">
            <p className='resultText'>{`${constants.SHOWING_TEXT} ${cars.length} ${constants.OF_TEXT} ${totalCarCount} ${constants.RESULT_TEXT}`}</p>
          </div>
        </div>
        <div className="sortDropDownContainer">
          <Dropdown
            dropdownContent={sortDropDownContent}
            defaultDropdownValue={constants.NONE_SORT_ORDER}
            getFilterParams={getSortFilterParams}
            dropDownLabel={constants.SORT_BY_TEXT}
          />
        </div>
      </div>
      {renderAvailableCars(cars)}
      <Pagination
        getPageParams={getPageParams}
        totalPageCount={totalPageCount}
        currentPage={currentPage}
        changePageNumber={changePageNumber}
      />
    </div>
  )
}

export default AvailableCarsArea
