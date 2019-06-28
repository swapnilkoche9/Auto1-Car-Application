import React from 'react'
import constants from '../constants/SystemConstants'
import { CarFiltersAreaProps } from '../utils/interface'
import { Suspense, lazy } from 'react';

const Dropdown = lazy(() => import('./Dropdown'));
const Button = lazy(() => import('../components/Button'));

const CarFiltersArea = (props: CarFiltersAreaProps) => {
  const {
    colors,
    manufacturers,
    getColorsFilterParams,
    getManufacturersFilterParams,
    getFilteredCarList
  } = props

  return (
    <div className='filtersContainer'>
      <div className='filtersContainerContent'>
        <div className='filterDropdown'>
          <Suspense fallback={<div />}>
            <Dropdown
              dropdownContent={colors}
              defaultDropdownValue={constants.ALL_CAR_COLORS_DROPDOWN}
              getFilterParams={getColorsFilterParams}
              dropDownLabel={constants.COLOR}
            />
          </Suspense>
        </div>
        <div className='filterDropdown'>
          <Suspense fallback={<div />}>
            <Dropdown
              dropdownContent={manufacturers}
              defaultDropdownValue={constants.ALL_MANUFACTURERS_DROPDOWN}
              getFilterParams={getManufacturersFilterParams}
              dropDownLabel={constants.MANUFACTURERS}
            />
          </Suspense>
        </div>
        <div className='filterBtnContainer'>
          <Suspense fallback={<div />}>
            <Button handleClick={getFilteredCarList} text={constants.BUTTON_TEXT} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default CarFiltersArea
