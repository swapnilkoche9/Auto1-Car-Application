import * as configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  getAllColors,
  getColorsFailure,
  getColorsSuccess,
  getColorsRequest
} from '../../actions/colors'

import * as types from '../../constants'

const middlewares = [thunk]
const mockStore = configureMockStore.default(middlewares)

beforeEach(() => {
  const colors = JSON.stringify(['yellow'])
  window.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        status: 200,
        json: () => colors
      })
    })
  })
})

test('should successfully get colors', () => {
  const action = getColorsSuccess(['yellow'])
  expect(action.type).toEqual('FETCH_ALL_COLORS_SUCCEEDED')
  expect(action.payload).toEqual(['yellow'])
})

test('should make request to get colors', () => {
  const action = getColorsRequest()
  expect(action.type).toEqual('FETCH_ALL_COLORS_REQUESTED')
})

test('should return an error for unsuccessful request', () => {
  const action = getColorsFailure({
    error: 'error'
  })
  expect(action.type).toEqual('FETCH_ALL_COLORS_FAILED')
  expect(action.payload.error.error).toEqual('error')
})

test('should get all colors', () => {

  const expectedActions = [
    { type: types.FETCH_ALL_COLORS_REQUESTED },
    { type: types.FETCH_ALL_COLORS_SUCCEEDED, payload: { colors: ['yellow'] } },
    { type: types.FETCH_ALL_COLORS_FAILED }
  ]
  const store = mockStore({ cars: [] })
  return store.dispatch(getAllColors()).then(() => {
    // return of async actions
    expect(store.getActions()[0].type).toEqual(expectedActions[0].type)
  })
})
