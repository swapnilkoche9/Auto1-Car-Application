import * as configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  getAllCars,
  getCarsFailure,
  getCarsRequest,
  getCarsSuccess,
  addFavoriteCar,
  addFavoriteCarSuccess,
  addFavoriteCarRequest,
  addFavoriteCarFailure,
  removeFavoriteCar,
  removeFavoriteCarFailure,
  removeFavoriteCarRequest,
  removeFavoriteCarSuccess,
  getSingleCar,
  changePageNumber
} from '../../actions/cars'

import * as types from '../../constants'

const middlewares = [thunk]
const mockStore = configureMockStore.default(middlewares)

let store = {}
const localStorageMock = {
  getItem: jest.fn().mockImplementation((key) => {
    return store[key] || null
  }),
  setItem: jest.fn((key, value) => {
    store[key] = value
  }),
  clear: jest.fn().mockImplementation(() => {
    store = {}
  }),
  removeItem: jest.fn().mockImplementation((key) => {
    delete store[key]
  })
}
window.localStorage = localStorageMock

window.localStorage.setItem('cars', JSON.stringify([{ modelName: 'car' }]))

beforeEach(() => {
  const cars = JSON.stringify({ modelName: 'car' })
  window.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        status: 200,
        json: () => cars
      })
    })
  })
})

test('should successfully get cars', () => {
  const action = getCarsSuccess(['jeep'])
  expect(action.type).toEqual('FETCH_ALL_CARS_SUCCEEDED')
  expect(action.payload).toEqual(['jeep'])
})

test('should change the page number', () => {
  const action = changePageNumber()
  expect(action.type).toEqual('PAGE_NUMBER_CHANGED')
})

test('should make request to get cars', () => {
  const action = getCarsRequest()
  expect(action.type).toEqual('FETCH_ALL_CARS_REQUESTED')
})

test('should return an error for unsuccessful request', () => {
  const action = getCarsFailure({
    error: 'error'
  })
  expect(action.type).toEqual('FETCH_ALL_CARS_FAILED')
  expect(action.payload.error.error).toEqual('error')
})

test('should get all cars', () => {

  const expectedActions = [
    { type: types.FETCH_ALL_CARS_REQUESTED },
    { type: types.FETCH_ALL_CARS_SUCCEEDED, payload: { cars: [{ modelName: 'car' }] } },
    { type: types.FETCH_ALL_CARS_FAILED }
  ]
  const store = mockStore({ cars: [] })
  return store.dispatch(getAllCars()).then(() => {
    // return of async actions
    expect(store.getActions()[0].type).toEqual(expectedActions[1].type)
  })
})

test('should get a single car', () => {

  const expectedActions = [
    { type: types.FETCH_SINGLE_CAR_REQUESTED },
    { type: types.FETCH_SINGLE_CAR_SUCCEEDED, payload: { car: { modelName: 'car' } } },
    { type: types.FETCH_SINGLE_CAR_FAILED }
  ]
  const store = mockStore({ cars: [] })
  return store.dispatch(getSingleCar()).then(() => {
    expect(store.getActions()[0].type).toEqual(expectedActions[1].type)
  })
})

test('should add car to favorite', () => {

  const expectedActions = [
    { type: types.ADD_CAR_TO_FAVORITES_COLLECTION_REQUESTED },
    { type: types.ADD_CAR_TO_FAVORITES_COLLECTION_SUCCEEDED, payload: { cars: [{ modelName: 'car' }] } },
    { type: types.ADD_CAR_TO_FAVORITES_COLLECTION_FAILED }
  ]
  const store = mockStore({ cars: [] })
  return store.dispatch(addFavoriteCar({ modelName: 'BMW' })).then(() => {
    // return of async actions
    expect(store.getActions()[0].type).toEqual(expectedActions[2].type)
  })
})

test('should remove car to favorite', () => {
  const expectedActions = [
    { type: types.REMOVE_CAR_FROM_FAVORITES_COLLECTION_REQUESTED },
    { type: types.REMOVE_CAR_FROM_FAVORITES_COLLECTION_SUCCEEDED, payload: { cars: [{ modelName: 'car' }] } },
    { type: types.REMOVE_CAR_FROM_FAVORITES_COLLECTION_FAILED }
  ]
  const store = mockStore({ cars: [] })
  return store.dispatch(removeFavoriteCar({ modelName: 'car' })).then(() => {
    // return of async actions
    expect(store.getActions()[0].type).toEqual(expectedActions[1].type)
  })
})

test('should successfully add car to favorite cars', () => {
  const action = addFavoriteCarSuccess({ modelName: 'jeep' })
  expect(action.type).toEqual('ADD_CAR_TO_FAVORITES_COLLECTION_SUCCEEDED')
  expect(action.payload).toEqual({ modelName: 'jeep' })
})

test('should make request to add car to favorite cars', () => {
  const action = addFavoriteCarRequest()
  expect(action.type).toEqual('ADD_CAR_TO_FAVORITES_COLLECTION_REQUESTED')
})

test('should return an error for unsuccessful request', () => {
  const action = addFavoriteCarFailure({
    error: 'error'
  })
  expect(action.type).toEqual('ADD_CAR_TO_FAVORITES_COLLECTION_FAILED')
  expect(action.payload.error).toEqual('error')
})

test('should successfully remove car from favorite cars', () => {
  const action = removeFavoriteCarSuccess({ modelName: 'jeep' })
  expect(action.type).toEqual('REMOVE_CAR_FROM_FAVORITES_COLLECTION_SUCCEEDED')
  expect(action.payload).toEqual({ modelName: 'jeep' })
})

test('should make request to remove car from favorite cars', () => {
  const action = removeFavoriteCarRequest()
  expect(action.type).toEqual('REMOVE_CAR_FROM_FAVORITES_COLLECTION_REQUESTED')
})

test('should return an error for unsuccessful request', () => {
  const action = removeFavoriteCarFailure({
    error: 'error'
  })
  expect(action.type).toEqual('REMOVE_CAR_FROM_FAVORITES_COLLECTION_FAILED')
  expect(action.payload.error.error).toEqual('error')
})
