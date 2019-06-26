import manufacturersReducer from '../../reducers/manufacturers'

test('should setup default manufacturers values', () => {
  const state = manufacturersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    isFetchingManufacturers: false,
    manufacturers: [],
    fetchingManufacturersError: null
  })
})

test('should request to fetch all manufacturers', () => {
  const state = manufacturersReducer(undefined, { type: 'FETCH_ALL_MANUFACTURERS_REQUESTED' })
  expect(state.isFetchingManufacturers).toBe(true)
})

test('should successfully fetch all manufacturers', () => {
  const state = manufacturersReducer(undefined, {
    type: 'FETCH_ALL_MANUFACTURERS_SUCCEEDED',
    payload: { manufacturers: ['audi'] }
  })
  expect(state.manufacturers).toEqual(['audi'])
})

test('should return error on failure to fetch manufacturers', () => {
  const state = manufacturersReducer(undefined, {
    type: 'FETCH_ALL_MANUFACTURERS_FAILED',
    payload: {
      error: {
        message: 'error'
      }
    }
  })
  expect(state.fetchingManufacturersError).toEqual('error')
})
