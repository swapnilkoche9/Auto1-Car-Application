import { get, checkHttpStatus, parseJSON } from './fetch'

export const getManufacturersApi = () => {
  return get('get-manufacturer','')
    .then(checkHttpStatus)
    .then(parseJSON)
    .catch(err => err)
}
