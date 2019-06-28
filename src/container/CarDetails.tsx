import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as carsActions from '../actions/cars'
import constants from '../constants/SystemConstants'
import { CarDetailsProps, Car } from '../utils/interface'
import { Suspense, lazy } from 'react';

const Button = lazy(() => import('../components/Button'));

class CarDetails extends React.Component<CarDetailsProps, {}> {

  componentDidMount() {
    const {
      match
    } = this.props
    this.props.carsActions.getSingleCar(match.params.stockNumber)
  }

  // add particular car to favorites list
  addFavoriteCar(car: Car) {
    this.props.carsActions.addFavoriteCar(car)
  }

  // remove particular car to favorites list
  removeCarFromFav(car: Car) {
    this.props.carsActions.removeFavoriteCar(car)
  }

  //  Confirm if this car is already added
  existsInFavCars(car: Car, favoriteCars: Car[]) {
    let exists = false
    favoriteCars.forEach((favCar: Car) => {
      if (favCar.stockNumber === car.stockNumber) {
        exists = true
      }
    })
    return exists
  }

  render() {

    const {
      isFetchingCars,
      car,
      favoriteCars
    } = this.props.cars

    return (
      <Fragment>
        {isFetchingCars === false ? <div className="carImageAndDescriptionContainer">
          <div className="carHeaderImage">
            <img src={car.pictureUrl} alt='car' />
          </div>
          <div className='carView'>
            <div className='carDetails'>
              <div className='carDescriptionContainer modalName'>
                {car.modelName}
              </div>
              <div className='carDescriptionContainer carDescription'>
                {`${constants.STOCK_LABEL}
              ${car.stockNumber} -
              ${car.mileage ? `${car.mileage.number} ${car.mileage.unit.toUpperCase()} - ` : ''}
              ${car.fuelType} -
              ${car.color}`}
              </div>
              <div className='carDescriptionContainer carAvailabilityText'>
                {constants.CAR_AVAILABILITY_TEXT}
              </div>
            </div>
            <div className='saveAndRemoveCarContainer'>
              <div className='saveAndRemovetextContainer saveCarText'>
                {constants.SAVE_CAR_TEXT}
              </div>
              <div className='saveAndRemoveButton'>
                {
                  this.existsInFavCars(car, favoriteCars)
                    ?
                    <Suspense fallback={<div />}>
                      <Button text={constants.REMOVE_TEXT} handleClick={this.removeCarFromFav.bind(this, car)} />
                    </Suspense>
                    :
                    <Suspense fallback={<div />}>
                      <Button text={constants.SAVE_TEXT} handleClick={this.addFavoriteCar.bind(this, car)} />
                    </Suspense>
                }

              </div>
            </div>
          </div>
        </div> : <div />}
      </Fragment>
    )
  }
}

const mapStateToProps = (state: CarDetailsProps) => {
  return {
    cars: state.cars
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    carsActions: bindActionCreators(carsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails)
