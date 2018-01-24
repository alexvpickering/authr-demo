import React from 'react'
import Container from '../../shared/Container'
import PageHeader from '../../shared/PageHeader.js'
import Input from '../../shared/InputGroup/Input'
import Button from '../../shared/Button.js'
import HR from '../../shared/HR.js'
import Space4 from '../../shared/Space4.js'
import Space3 from '../../shared/Space3.js'
import SmallPrint from '../../shared/SmallPrint.js'
import { Link } from 'react-router-dom'
import FormError from '../../shared/InputGroup/InputError'
import FormLabel from '../../shared/InputGroup/InputLabel'
import InputGroup from '../../shared/InputGroup/InputGroup.js'

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

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    this.setState({
      emailError: 'This field is required.',
      passwordError: 'Test error.'
    })

    console.log(this.state)
    // console.log(this.state.emailError)
    // this.props.userSignupRequest({
    //   email: this.state.email,
    //   password: this.state.password
    // })

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
                  type='email'
                  label='Email'
                  name='email'
                  value={this.state.email}
                  error={this.state.emailError}
                  onChange={this.onChange}
                />
                <InputGroup
                  type='password'
                  label='Password'
                  name='password'
                  value={this.state.password}
                  error={this.state.passwordError}
                  onChange={this.onChange}
                />
                <InputGroup
                  type='password'
                  label='Confirm password'
                  name='confirm'
                  value={this.state.confirm}
                  error={this.state.confirmError}
                  onChange={this.onChange}
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

// Register.propTypes = {
//   userSignupRequest: React.PropTypes.func.isRequired
// }


export default Register
