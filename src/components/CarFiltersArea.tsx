import React from 'react'
import Dropdown from './Dropdown'
import Button from './Button'
import constants from '../constants/SystemConstants'
import {CarFiltersAreaProps} from '../utils/interface'


const CarFiltersArea = (props:CarFiltersAreaProps) => {
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
          <Dropdown
            dropdownContent={colors}
            defaultDropdownValue={constants.ALL_CAR_COLORS_DROPDOWN}
            getFilterParams={getColorsFilterParams}
            dropDownLabel={constants.COLOR}
          />
        </div>
        <div className='filterDropdown'>
          <Dropdown
            dropdownContent={manufacturers}
            defaultDropdownValue={constants.ALL_MANUFACTURERS_DROPDOWN}
            getFilterParams={getManufacturersFilterParams}
            dropDownLabel={constants.MANUFACTURERS}
          />
        </div>
        <div className='filterBtnContainer'>
          <Button handleClick={getFilteredCarList} text={constants.BUTTON_TEXT} />
        </div>
      </div>
    </div>
  )
}

export default CarFiltersArea
