import React from 'react'
import constants from '../constants/SystemConstants'
import { AvailableCarsAreaProps, Car, Cars } from '../utils/interface'
import { Suspense, lazy } from 'react';

const AvailableCar = lazy(() => import('./AvailableCar'));
const Pagination = lazy(() => import('./Pagination'));
const Dropdown = lazy(() => import('./Dropdown'));

const sortDropDownContent = [constants.NONE_SORT_ORDER, constants.ASC_SORT_ORDER, constants.DES_SORT_ORDER]
let renderAvailableCars = (cars: Cars) => {
  return cars && cars.map((car: Car, index: number) => {
    const {
      stockNumber,
      mileage,
      fuelType,
      color,
      modelName,
      pictureUrl
    } = car
    return (
      <Suspense fallback={<div />} key={index}>
        <AvailableCar
          key={index}
          stockNumber={stockNumber}
          mileage={mileage}
          fuelType={fuelType}
          color={color}
          modelName={modelName}
          pictureUrl={pictureUrl}
        />
      </Suspense>
    )
  })
}

const AvailableCarsArea = (props: AvailableCarsAreaProps) => {
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
          <Suspense fallback={<div />}>
            <Dropdown
              dropdownContent={sortDropDownContent}
              defaultDropdownValue={constants.NONE_SORT_ORDER}
              getFilterParams={getSortFilterParams}
              dropDownLabel={constants.SORT_BY_TEXT}
            />
          </Suspense>
        </div>
      </div>
      {renderAvailableCars(cars)}
      <Suspense fallback={<div />}>
        <Pagination
          getPageParams={getPageParams}
          totalPageCount={totalPageCount}
          currentPage={currentPage}
          changePageNumber={changePageNumber}
        />
      </Suspense>
    </div>
  )
}

export default AvailableCarsArea
