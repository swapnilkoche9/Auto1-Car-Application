import {Car} from '../utils/interface'
import constants from '../constants/SystemConstants'
  // car object  added to localStorage

export const addFavoriteCarAsync = (car:Car) => {
  debugger
  return new Promise((resolve, reject) => {
    const cars = localStorage.getItem('cars')
    process.nextTick(() => {
      if (cars) {
        let exists = false
        JSON.parse(cars).forEach((element:Car) => {
          if (element.stockNumber === car.stockNumber) {
            exists = true
          }
        })
        if (exists) {
          const carAlreadyExistsError = new Error(constants.CAR_EXIST)
          return reject(carAlreadyExistsError)
        }
        const parsedLocalStorageData = JSON.parse(localStorage.getItem('cars') || '{}')
        const modifiedFavCars = parsedLocalStorageData.concat(car)
        localStorage.setItem('cars', JSON.stringify(modifiedFavCars))
        return resolve({ cars: modifiedFavCars })
      }
      localStorage.setItem('cars', JSON.stringify([car]))
      resolve({ cars: [car] })
    })
  })
}

//  car object removed from localStorage

export const removeFromFavoriteCarAsync = (car:Car) => {
  return new Promise((resolve, reject) => {
    const cars = localStorage.getItem('cars')
    process.nextTick(() => {
      if (cars && cars.length > 0) {
        const parsedLocalStorageData = JSON.parse(cars)
        const modifiedCars = parsedLocalStorageData.filter((data:Car, index:number, arr:Array<Car>) => {
          return data.stockNumber !== car.stockNumber
        })
        localStorage.removeItem('cars')
        localStorage.setItem('cars', JSON.stringify(modifiedCars))
        return resolve({ cars: modifiedCars })
      }
      if (cars && cars.length === 0) {
        const emptyStorageError = new Error()
        emptyStorageError.message = constants.STORAGE_EMPTY
        return reject(emptyStorageError)
      }
    })
  })
}