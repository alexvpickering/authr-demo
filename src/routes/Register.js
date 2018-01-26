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
import { authrRequest, REGISTER_ENDPOINT } from '../redux/actions/authrActions'
import { withRouter } from 'react-router-dom'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirm: '',
      emailError: '',
      passwordError: '',
      confirmError: ''
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

  // validate password
  validatePassword = () => {
    if (this.state.password.length <= 6) {
      this.setState({passwordError: 'Password must be at least 6 characters long.'})
    } else {
      this.setState({passwordError: ''})
    }
  }

  // validate confirm password
  validateConfirm = () => {
    if (this.state.password !== this.state.confirm) {
      this.setState({confirmError: "Password doesn't match."})
    } else if (!this.state.confirm) {
      this.setState({confirmError: "Please confirm password."})
    } else {
      this.setState({confirmError: ''})
    }
  }

  onSubmit = e => {
    e.preventDefault()

    // recheck inputs
    this.validateEmail()
    this.validatePassword()
    this.validateConfirm()

    if (!this.state.emailError || !this.state.passwordError || !this.state.confirmError)
    this.props.authrRequest(
      REGISTER_ENDPOINT, {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.setItem('authr_jwt', response.data)
        this.props.history.push('/')
      })
      .catch(error => this.setState({emailError: error.response.data}))

    }

    render() {
      return (
        <div>
          <PageHeader>
            <Container>
              <h1>Join R Widgets</h1>
              <p>This is an example signup form for <a href="https://github.com/alexvpickering/authr">authr</a>.</p>
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
                  <InputGroup
                    type='password'
                    label='Confirm password'
                    name='confirm'
                    value={this.state.confirm}
                    error={this.state.confirmError}
                    onChange={this.onChange}
                    onBlur={this.validateConfirm}
                  />
                  <Button>Sign up</Button>
                </form>
              </Space3>
              <HR/>
              <SmallPrint>Already a member? <Link to="/login">Login</Link></SmallPrint>
            </Space4>
          </Container>
        </div>

      )
    }
  }


  export default connect(state => { return {} }, { authrRequest })(withRouter(Register))
