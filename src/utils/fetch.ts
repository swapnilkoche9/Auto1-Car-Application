import { API_URL } from '../constants'

export const paths: any = {
  'get-cars': 'cars',
  'get-colors': 'colors',
  'get-manufacturer': 'manufacturers',
  'get-car': 'cars'
}
// Handle all api calls for any method

function fetchBackend(endpoint: string, method: string, body: any, params: any, id: any) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  const fetchObject = { method, headers, body }
  // map endpoint passed to get currect url
  const path = paths[endpoint] || endpoint
  let url = `${API_URL}${path}`
  if (body) {
    fetchObject.body = JSON.stringify(body)
  }

  if (id) {
    url = `${url}/${id}`
  }

  // Construct the appropriate url that has extra parameters
  if (params) {
    const paramsArray = Object.keys(params).map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    })

    url += `?${paramsArray.join('&')}`
  }
  return fetch(url, fetchObject)
}

//  Perform get requests

export function get(endpoint: string, params: any, id = null) {
  return fetchBackend(endpoint, 'GET', null, params, id)
}


// Handle the Http status

export function checkHttpStatus(response: any) {
  return new Promise((resolve, reject) => {
    if (response.status === 404) {

    }

    if (response && response.status >= 200 && response.status < 300) {
      resolve(response)
    }

    const errorText = response && response.statusText ? response.statusText : 'Unknown Error'
    const error = new Error(errorText)
    reject(error)
  })
}

//  Parse response json 

export function parseJSON(response: any) {
  return new Promise((resolve, reject) => {
    if (!response || !response.json) {
      const connectionError: any = new Error()
      connectionError.message = {
        connection: 'Network connection failed'
      }
      reject(connectionError)
    }
    resolve(response.json())
  })
}

export const handleError = (error: any) => {
  return error
}
