import { REQUEST_REGISTER, RESPONSE_REGISTER } from './actions'

// state outline
/*
{
  jwt: [],
}
*/

export default function register(
  state = {
    jwt: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_REGISTER:
      return state
    case RESPONSE_REGISTER:
      return Object.assign({}, state, {
        jwt: action.jwt
      })
    default:
      return state
  }
}
