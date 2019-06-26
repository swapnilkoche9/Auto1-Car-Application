import {
  FETCH_ALL_CARS_SUCCEEDED,
  FETCH_ALL_CARS_REQUESTED,
  FETCH_ALL_CARS_FAILED,
  FETCH_SINGLE_CAR_SUCCEEDED,
  FETCH_SINGLE_CAR_REQUESTED,
  FETCH_SINGLE_CAR_FAILED,
  ADD_CAR_TO_FAVORITES_COLLECTION_REQUESTED,
  ADD_CAR_TO_FAVORITES_COLLECTION_SUCCEEDED,
  ADD_CAR_TO_FAVORITES_COLLECTION_FAILED,
  REMOVE_CAR_FROM_FAVORITES_COLLECTION_FAILED,
  REMOVE_CAR_FROM_FAVORITES_COLLECTION_SUCCEEDED,
  REMOVE_CAR_FROM_FAVORITES_COLLECTION_REQUESTED,
  PAGE_NUMBER_CHANGED
} from '../constants'

import { getCarsApi, getSingleCarApi } from '../utils/cars'
import { handleError } from '../utils/fetch'
import { addFavoriteCarAsync, removeFromFavoriteCarAsync } from '../helpers'
import { Dispatch } from 'react';
import {Car} from '../utils/interface'

export function changePageNumber (currentPage:number) {
  return {
    type: PAGE_NUMBER_CHANGED,
    payload: currentPage
  }
}
export function getCarsRequest () {
  return {
    type: FETCH_ALL_CARS_REQUESTED
  }
}

export function getCarsSuccess (data:any) {
  return {
    type: FETCH_ALL_CARS_SUCCEEDED,
    payload: data
  }
}

export function getCarsFailure (error:string) {
  return {
    type: FETCH_ALL_CARS_FAILED,
    payload: {
      error: error
    }
  }
}


export function getAllCars (params:any) {
  return (dispatch: Dispatch<any>) => {
   // dispatch(getCarsRequest())

    return getCarsApi(params)
      .then((response) => {
        dispatch(getCarsSuccess(response))
        return true
      })
      .catch((error) => {
        dispatch(getCarsFailure(handleError(error)))
        return false
      })
  }
}

export function getSingleCarRequest () {
  return {
    type: FETCH_SINGLE_CAR_REQUESTED
  }
}

export function getSingleCarSuccess (data:any) {
  return {
    type: FETCH_SINGLE_CAR_SUCCEEDED,
    payload: data
  }
}

export function getSingleCarFailure (error:string) {
  return {
    type: FETCH_SINGLE_CAR_FAILED,
    payload: {
      error: error
    }
  }
}

export function getSingleCar (stockNumber:number) {
  return (dispatch: Dispatch<any>) => {
   // dispatch(getSingleCarRequest())

    return getSingleCarApi(stockNumber)
      .then((response) => {
        dispatch(getSingleCarSuccess(response))
        return true
      })
      .catch((error) => {
        dispatch(getSingleCarFailure(handleError(error)))
        return false
      })
  }
}
export function addFavoriteCarRequest () {
  return {
    type: ADD_CAR_TO_FAVORITES_COLLECTION_REQUESTED
  }
}

export function addFavoriteCarSuccess (data:any) {
  return {
    type: ADD_CAR_TO_FAVORITES_COLLECTION_SUCCEEDED,
    payload: data
  }
}

export function addFavoriteCarFailure (error:string) {
  return {
    type: ADD_CAR_TO_FAVORITES_COLLECTION_FAILED,
    payload: error
  }
}

export function addFavoriteCar (car:Car) {
  return (dispatch:Dispatch<any>) => {
   // dispatch(addFavoriteCarRequest())

    return addFavoriteCarAsync(car)
      .then((response) => {
        dispatch(addFavoriteCarSuccess(response))
        return true
      })
      .catch((error) => {
        dispatch(addFavoriteCarFailure(error.message))
        return false
      })
  }
}

export function removeFavoriteCarRequest () {
  return {
    type: REMOVE_CAR_FROM_FAVORITES_COLLECTION_REQUESTED
  }
}

export function removeFavoriteCarSuccess (data:any) {
  return {
    type: REMOVE_CAR_FROM_FAVORITES_COLLECTION_SUCCEEDED,
    payload: data
  }
}

export function removeFavoriteCarFailure (error:string) {
  return {
    type: REMOVE_CAR_FROM_FAVORITES_COLLECTION_FAILED,
    payload: {
      error: error
    }
  }
}

export function removeFavoriteCar (car:Car) {
  return (dispatch:Dispatch<any>) => {
   // dispatch(removeFavoriteCarRequest())

    return removeFromFavoriteCarAsync(car)
      .then((response) => {
        dispatch(removeFavoriteCarSuccess(response))
        return true
      })
      .catch((error) => {
        dispatch(removeFavoriteCarFailure(error.message))
        return false
      })
  }
}
