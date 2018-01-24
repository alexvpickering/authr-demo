import axios from 'axios'
import { WANIP } from '../../utils/wanip.js'

export const REQUEST_REGISTER = 'REQUEST_REGISTER'
export const RESPONSE_REGISTER = 'RESPONSE_REGISTER'
export const REGISTER_ENDPOINT = `http://${WANIP}:8005/api/authr/register_user`

// synchronous action creators

export function requestRegister() {
  return {
    type: REQUEST_REGISTER
  }
}

export function responseRegister(jwt) {
  return {
    type: RESPONSE_REGISTER,
    jwt
  }
}

// thunk: action create that returns a function
export function fetchRegister(endpoint, userdata) {
  return dispatch => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting
    dispatch(requestRegister())

    return axios.post(endpoint, userdata)
      .then(
        // Second dispatch: update the app state with the results of the API call
        response => dispatch(responseRegister(response.data)),
        error => console.log('An error occured.', error)
      )
  }
}
