import { get, checkHttpStatus, parseJSON } from './fetch'

export const getCarsApi = (filterParams = null) => {
  return get('get-cars', filterParams)
    .then(checkHttpStatus)
    .then(parseJSON)
    .catch((err:string) => err)
}

export const getSingleCarApi = (stockNumber:any) => {
  return get('get-car', null, stockNumber)
    .then(checkHttpStatus)
    .then(parseJSON)
    .catch((err:string) => err)
}
