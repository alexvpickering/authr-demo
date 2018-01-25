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
import { authrRequest, FORGOT_ENDPOINT } from '../redux/actions/authrActions'

class Forgot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      emailError: '',
      emailSuccess: ''
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
      FORGOT_ENDPOINT,
      { email: this.state.email })
      .then(
        this.setState({emailSuccess: 'It should arrive shortly.'})
      )
      .catch(
        error => this.setState({emailError: ' ', passwordError: error.response.data}))
      }

      render() {
        return (
          <div>
            <PageHeader>
              <Container>
                <h1>Reset your password</h1>
                <p>Oops! It happens. Enter your email address and our robots will send you instructions to reset your password.</p>
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
                      success={this.state.emailSuccess}
                      onChange={this.onChange}
                      onBlur={this.validateEmail}
                    />
                    <Button>Submit</Button>
                  </form>
                </Space3>
              </Space4>
            </Container>
          </div>

        )
      }
    }


    export default connect(state => { return {} }, { authrRequest })(Forgot)
