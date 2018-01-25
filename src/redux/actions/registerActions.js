import axios from 'axios'
import { WANIP } from '../../utils/wanip.js'

export const REGISTER_ENDPOINT = `http://${WANIP}:8005/api/authr/register_user`

export function userRegisterRequest(userdata) {
  return dispatch => axios.post(REGISTER_ENDPOINT, userdata)
}
