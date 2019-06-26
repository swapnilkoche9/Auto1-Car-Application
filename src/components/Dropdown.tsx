import React from 'react'
import Select from 'react-select';
import constants from '../constants/SystemConstants'
import {DropDownProps} from '../utils/interface'
const dropDownStyles = {
  option: (styles:any, {isFocused}:any) => {
    return {
       ...styles,
      backgroundColor: isFocused ? constants.ORANGE_COLOR : constants.WHITE_COLOR,
      color: isFocused ? constants.WHITE_COLOR : constants.DARK_GRAY_COLOR,
    };
  },
  placeholder:(styles:any)=>{
    return{
      ...styles,
       color: constants.DARK_GRAY_COLOR,
    }
  }
  
};
const Dropdown = (props:DropDownProps) => {
  const {
    dropdownContent,
    defaultDropdownValue,
    getFilterParams,
    dropDownLabel
  } = props
  return (
    <div className="dropDownContainer">
      <label className="dropDownLabel">{dropDownLabel}</label>
      <div className="dropDown">
         <Select styles={dropDownStyles} options={dropdownContent.map((option:any) => ({ label: option, value: option }))} isSearchable={true} onChange={getFilterParams} placeholder={defaultDropdownValue} />
      </div>
      </div>
  )
  }
  

export default Dropdown
