import React from 'react'
import Container from '../../shared/Container'
import PageHeader from '../../shared/PageHeader.js'
import Input from '../../shared/Input.js'
import Button from '../../shared/Button.js'
import HR from '../../shared/HR.js'
import Space4 from '../../shared/Space4.js'
import Space3 from '../../shared/Space3.js'
import SmallPrint from '../../shared/SmallPrint.js'
import { Link } from 'react-router-dom'
import FormError from '../../shared/FormError.js'
import FormLabel from '../../shared/FormLabel.js'

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

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    // computed property names
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    this.setState({
      emailError: 'This field is required.'
    })

    console.log(this.state.emailError)
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
                <FormLabel error={this.state.emailError}>Email:
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={this.state.emailError}
                  />
                  <FormError error={this.state.emailError}>
                    {this.state.emailError}
                  </FormError>
                </FormLabel>
                <FormLabel error={this.state.passwordError}>Password:
                  <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </FormLabel>
                <FormLabel error={this.state.confirmError}>Confirm password:
                  <Input
                    type="password"
                    name="confirm"
                    value={this.state.confirm}
                    onChange={this.onChange}
                  />
                </FormLabel>
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
