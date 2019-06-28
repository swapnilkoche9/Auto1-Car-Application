import {
  FETCH_ALL_COLORS_REQUESTED,
  FETCH_ALL_COLORS_SUCCEEDED,
  FETCH_ALL_COLORS_FAILED
} from '../constants'
import { GenericAction } from '../utils/interface'
const initialState = {
  isFetchingColors: false,
  colors: [],
  fetchingColorsError: null
}

function colors(state = initialState, action: GenericAction) {
  switch (action.type) {
    case FETCH_ALL_COLORS_REQUESTED:
      return Object.assign({}, state, {
        isFetchingColors: true,
        colors: [],
        fetchingColorsError: null
      })

    case FETCH_ALL_COLORS_SUCCEEDED:
      return Object.assign({}, state, {
        isFetchingColors: false,
        colors: action.payload.colors,
        fetchingColorsError: null
      })

    case FETCH_ALL_COLORS_FAILED:
      return Object.assign({}, state, {
        isFetchingColors: false,
        colors: [],
        fetchingColorsError: action.payload.error.message
      })

    default:
      return state
  }
}

export default colors
