import { get, checkHttpStatus, parseJSON } from './fetch'

export const getColorsApi = () => {
  return get('get-colors','')
    .then(checkHttpStatus)
    .then(parseJSON)
    .catch((err:string) => err)
}
