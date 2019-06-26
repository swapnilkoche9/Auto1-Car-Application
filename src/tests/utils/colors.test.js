import {
  getColorsApi,
} from '../../utils/colors'

describe('Colors API', function () {
  beforeEach(function () {
    const colors = JSON.stringify(['Yellow'])
    window.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({
          status: 200,
          json: () => colors
        })
      })
    })
  })

  it('fetch all colors', function () {
    getColorsApi().then(response => {
      const parsedResponse = JSON.parse(response)
      expect(parsedResponse).toEqual(['Yellow'])
    })
  })
})
