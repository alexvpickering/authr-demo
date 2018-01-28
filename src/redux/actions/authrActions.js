import axios from 'axios'
import { WANIP } from '../../utils/wanip.js'

export const REGISTER_ENDPOINT = `http://${WANIP}:8005/api/authr/register_user`
export const LOGIN_ENDPOINT    = `http://${WANIP}:8005/api/authr/login_user`
export const FORGOT_ENDPOINT   = `http://${WANIP}:8005/api/authr/forgot_password`

export function authrRequest(endpoint, userdata) {
  return dispatch => axios.post(endpoint, userdata, {timeout: 2000})
}
