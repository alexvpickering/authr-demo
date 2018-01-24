import { connect } from 'react-redux'
import Register from './Login'
import { fetchRegister, REGISTER_ENDPOINT } from '../../redux/actions/register'

// function to transform redux store to props to pass to presentational components

const mapStateToProps = state => {
  return {
    jwt: state.jwt
  }
}

// function that receives dispatch() and returns callback props that you want
//  to inject into the presentational components

const mapDispatchToProps = dispatch => {
  return {
    userSignupRequest: (userdata) => {
      dispatch(fetchRegister(REGISTER_ENDPOINT, userdata))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
