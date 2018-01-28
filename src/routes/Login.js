import React from 'react'
import Container from '../shared/Container'
import PageHeader from '../shared/PageHeader.js'
import Button from '../shared/Button.js'
import HR from '../shared/HR.js'
import Space4 from '../shared/Space4.js'
import Space3 from '../shared/Space3.js'
import SmallPrint from '../shared/SmallPrint.js'
import { Link } from 'react-router-dom'
import InputGroup from '../shared/InputGroup/InputGroup.js'
import validateEmail from '../utils/validateEmail.js'
import { connect } from 'react-redux'
import { authrRequest, LOGIN_ENDPOINT } from '../redux/actions/authrActions'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    }

  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // validate email
  validateEmail = () => {
    if (!validateEmail(this.state.email)) {
      this.setState({emailError: 'Invalid email.'})
    } else {
      this.setState({emailError: ''})
    }
  }

  onSubmit = e => {
    e.preventDefault()

    // recheck inputs
    this.validateEmail()

    if (!this.state.emailError)
    this.props.authrRequest(
      LOGIN_ENDPOINT,
      { email: this.state.email, password: this.state.password })
      .then(response => {
        localStorage.setItem('authr_jwt', response.data)
        this.props.history.push('/')
      })
      .catch(error => {
        const response = error.response
        response ?
        this.setState({emailError: ' ', passwordError: response.data}) :
        this.setState({emailError: ' ', passwordError: 'R server is shutdown for the evening. Try again later.'})
      })
    }

    render() {
      return (
        <div>
          <PageHeader>
            <Container>
              <h1>Join R Widgets</h1>
              <p>This is an example login form for <a href="https://github.com/alexvpickering/authr">authr</a>.</p>
            </Container>
          </PageHeader>
          <Container>
            <Space4>
              <Space3>
                <form onSubmit={this.onSubmit}>
                  <InputGroup
                    type='text'
                    label='Email'
                    name='email'
                    value={this.state.email}
                    error={this.state.emailError}
                    onChange={this.onChange}
                    onBlur={this.validateEmail}
                  />
                  <InputGroup
                    type='password'
                    label='Password'
                    name='password'
                    value={this.state.password}
                    error={this.state.passwordError}
                    onChange={this.onChange}
                    onBlur={this.validatePassword}
                  />
                  <Button>Sign in</Button>
                </form>
              </Space3>
              <SmallPrint><Link to='/forgot_password'>Forgot your password?</Link></SmallPrint>
              <HR/>
              <SmallPrint>Need an account? <Link to="/register">Sign up</Link></SmallPrint>
            </Space4>
          </Container>
        </div>

      )
    }
  }


  export default connect(state => { return {} }, { authrRequest })(withRouter(Login))
