import React from 'react'
import { Link } from 'react-router-dom'
import constants from '../constants/SystemConstants'
import { AvailableCarProps } from '../utils/interface'

const AvailableCar = (props: AvailableCarProps) => (
  <div className='availableCar'>
    <div className='carImageContainer'>
      <img className='carImage' src={props.pictureUrl} alt="car" />
    </div>
    <div className='availableCarDetails'>
      <div>
        <p className='availableCarstext availableCarsTextBold'>{`${props.modelName}`}</p>
      </div>
      <div className='availableCarstext availableCarsTextSmall'>
        <p>{`${constants.STOCK_LABEL}
            ${props.stockNumber} -
            ${props.mileage.number} ${props.mileage.unit.toUpperCase()} -
            ${props.fuelType} -
            ${props.color}`}</p>
      </div>
      <div className="viewDetailsLinkContainer">
        <Link to={`/car/${props.stockNumber}`} className='availableCarstext availableCarsTextSmall linkTextOange'>{constants.VIEW_DETAILS_TEXT}</Link>
      </div>
    </div>
  </div>
)

export default AvailableCar
