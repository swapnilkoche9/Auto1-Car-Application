import * as configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  getAllManufacturers,
  getManufacturersFailure,
  getManufacturersSuccess,
  getManufacturersRequest
} from '../../actions/manufacturers'

import * as types from '../../constants'

const middlewares = [thunk]
const mockStore = configureMockStore.default(middlewares)

beforeEach(() => {
  const manufacturers = JSON.stringify(['BMW'])
  window.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve({
        status: 200,
        json: () => manufacturers
      })
    })
  })
})

test('should successfully get manufacturers', () => {
  const action = getManufacturersSuccess(['porsche'])
  expect(action.type).toEqual('FETCH_ALL_MANUFACTURERS_SUCCEEDED')
  expect(action.payload).toEqual(['porsche'])
})

test('should make request to get manufacturers', () => {
  const action = getManufacturersRequest()
  expect(action.type).toEqual('FETCH_ALL_MANUFACTURERS_REQUESTED')
})

test('should return an error for unsuccessful request', () => {
  const action = getManufacturersFailure({
    error: 'error'
  })
  expect(action.type).toEqual('FETCH_ALL_MANUFACTURERS_FAILED')
  expect(action.payload.error.error).toEqual('error')
})

test('should get all manufacturers', () => {
  const expectedActions = [
    { type: types.FETCH_ALL_MANUFACTURERS_REQUESTED },
    { type: types.FETCH_ALL_MANUFACTURERS_SUCCEEDED, payload: { manufacturers: ['BMW'] } },
    { type: types.FETCH_ALL_MANUFACTURERS_FAILED }
  ]
  const store = mockStore({ cars: [] })
  return store.dispatch(getAllManufacturers()).then(() => {
    // return of async actions
    expect(store.getActions()[0].type).toEqual(expectedActions[0].type)
  })
})
