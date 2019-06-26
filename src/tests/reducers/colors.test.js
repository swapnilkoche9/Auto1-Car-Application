import colorsReducer from '../../reducers/colors'

test('should setup default colors values', () => {
  const state = colorsReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    isFetchingColors: false,
    colors: [],
    fetchingColorsError: null
  })
})

test('should request to fetch all colors', () => {
  const state = colorsReducer(undefined, { type: 'FETCH_ALL_COLORS_REQUESTED' })
  expect(state.isFetchingColors).toBe(true)
})

test('should successfully fetch all colors', () => {
  const state = colorsReducer(undefined, {
    type: 'FETCH_ALL_COLORS_SUCCEEDED',
    payload: { colors: ['yellow'] }
  })
  expect(state.colors).toEqual(['yellow'])
})

test('should return error on failure to fetch colors', () => {
  const state = colorsReducer(undefined, {
    type: 'FETCH_ALL_COLORS_FAILED',
    payload: {
      error: {
        message: 'error'
      }
    }
  })
  expect(state.fetchingColorsError).toEqual('error')
})
