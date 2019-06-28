import {
  FETCH_ALL_COLORS_SUCCEEDED,
  FETCH_ALL_COLORS_REQUESTED,
  FETCH_ALL_COLORS_FAILED
} from '../constants'

import { getColorsApi } from '../utils/colors'
import { handleError } from '../utils/fetch'
import { Dispatch } from 'react';

export function getColorsRequest() {
  return {
    type: FETCH_ALL_COLORS_REQUESTED
  }
}

export function getColorsSuccess(data: any) {
  return {
    type: FETCH_ALL_COLORS_SUCCEEDED,
    payload: data
  }
}

export function getColorsFailure(error: string) {
  return {
    type: FETCH_ALL_COLORS_FAILED,
    payload: {
      error: error
    }
  }
}

export function getAllColors() {
  return (dispatch: Dispatch<any>) => {
    dispatch(getColorsRequest())

    return getColorsApi()
      .then((response) => {
        dispatch(getColorsSuccess(response))
        return true
      })
      .catch((error) => {
        dispatch(getColorsFailure(handleError(error)))
        return false
      })
  }
}
