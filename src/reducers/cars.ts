import {
  FETCH_ALL_CARS_SUCCEEDED,
  FETCH_ALL_CARS_REQUESTED,
  FETCH_ALL_CARS_FAILED,
  FETCH_SINGLE_CAR_FAILED,
  FETCH_SINGLE_CAR_REQUESTED,
  FETCH_SINGLE_CAR_SUCCEEDED,
  ADD_CAR_TO_FAVORITES_COLLECTION_REQUESTED,
  ADD_CAR_TO_FAVORITES_COLLECTION_SUCCEEDED,
  ADD_CAR_TO_FAVORITES_COLLECTION_FAILED,
  REMOVE_CAR_FROM_FAVORITES_COLLECTION_FAILED,
  REMOVE_CAR_FROM_FAVORITES_COLLECTION_REQUESTED,
  REMOVE_CAR_FROM_FAVORITES_COLLECTION_SUCCEEDED,
  PAGE_NUMBER_CHANGED
} from '../constants'
import {GenericAction} from '../utils/interface'
const initialState = {
  isFetchingCars: false,
  cars: [],
  currentPage: 1,
  favoriteCars: localStorage.getItem('cars')  ? JSON.parse(localStorage.getItem('cars') || '{}') : [],
  totalPageCount: undefined,
  fetchingCarsError: undefined,
  isFetchingSingleCar: false,
  car: {},
  fetchingSingleCarError: undefined,
  isAddingCar: false,
  addingCarError: undefined,
  carRemoved: {},
  isRemovingCars: false,
  removingCarError: undefined,
  totalCarCount: 0
}


function cars (state = initialState, action:GenericAction) {
  
  switch (action.type) {
    case FETCH_ALL_CARS_REQUESTED:
      return Object.assign({}, state, {
        isFetchingCars: true,
        cars: [],
        fetchingCarsError: null
      })

    case FETCH_ALL_CARS_SUCCEEDED:
      return Object.assign({}, state, {
        isFetchingCars: false,
        cars: action.payload.cars,
        totalPageCount: action.payload.totalPageCount,
        fetchingCarsError: null,
        totalCarCount: action.payload.totalCarsCount
      })

    case FETCH_ALL_CARS_FAILED:
      return Object.assign({}, state, {
        isFetchingCars: false,
        cars: [],
        fetchingCarsError: action.payload.error.message
      })

    case FETCH_SINGLE_CAR_REQUESTED:
      return Object.assign({}, state, {
        isFetchingSingleCar: true,
        cars: [],
        fetchingSingleCarError: null
      })

    case FETCH_SINGLE_CAR_SUCCEEDED:
      return Object.assign({}, state, {
        isFetchingSingleCar: false,
        car: action.payload.car,
        fetchingSingleCarError: null
      })

    case FETCH_SINGLE_CAR_FAILED:
      return Object.assign({}, state, {
        isFetchingSingleCar: false,
        car: {},
        fetchingSingleCarError: action.payload.error.message
      })

    case ADD_CAR_TO_FAVORITES_COLLECTION_SUCCEEDED:
      return Object.assign({}, state, {
        isAddingCar: true,
        favoriteCars: action.payload.cars,
        addCarError: null
      })

    case ADD_CAR_TO_FAVORITES_COLLECTION_FAILED:
      return Object.assign({}, state, {
        isAddingCar: false,
        favoriteCars: state.favoriteCars,
        addingCarError: JSON.stringify(action.payload)
      })

    case ADD_CAR_TO_FAVORITES_COLLECTION_REQUESTED:
      return Object.assign({}, state, {
        isAddingCar: true,
        favoriteCars: state.favoriteCars,
        addingCarsError: null
      })

    case REMOVE_CAR_FROM_FAVORITES_COLLECTION_SUCCEEDED:
      return Object.assign({}, state, {
        isRemovingCar: true,
        favoriteCars: action.payload.cars,
        removingCarError: null
      })

    case REMOVE_CAR_FROM_FAVORITES_COLLECTION_FAILED:
      return Object.assign({}, state, {
        isRemovingCar: false,
        carRemoved: false,
        removingCarError: action.payload.error.message
      })

    case REMOVE_CAR_FROM_FAVORITES_COLLECTION_REQUESTED:
      return Object.assign({}, state, {
        isRemovingCar: true,
        carRemoved: [],
        removingCarError: null
      })

    case PAGE_NUMBER_CHANGED:
      return Object.assign({}, state, {
        currentPage: action.payload
      })

    default:
      return state
  }
}

export default cars
