import axios from "axios";

const WANIP_URL =
  "https://raw.githubusercontent.com/alexvpickering/rd3/master/src/utils/wanip.js";

export const RECEIVE_WANIP = "RECEIVE_WANIP";

export function receiveWANIP(wanip) {
  return {
    type: RECEIVE_WANIP,
    wanip
  };
}

// thunks
export function authrRequest(endpoint, userdata) {
  return dispatch => axios.post(endpoint, userdata, { timeout: 2000 });
}

export function fetchWANIP() {
  return dispatch => {
    return axios
      .get(WANIP_URL)
      .then(
        response => dispatch(receiveWANIP(response.data.replace(/\n/g, ""))),
        error => console.log("An error occured", error)
      );
  };
}
