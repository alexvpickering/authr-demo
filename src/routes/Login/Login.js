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


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    // computed property names
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    this.props.userLoginRequest({
      email: this.state.email,
      password: this.state.password
    })

  }

  render() {
    return (
      <div>
        <PageHeader>
          <Container>
            <h1>Login to R Widgets</h1>
            <p>This is an example login form for <a href="https://github.com/alexvpickering/authr">authr</a>.</p>
          </Container>
        </PageHeader>
        <Container>
          <Space4>
            <Space3>
              <form onSubmit={this.onSubmit}>
                <label>Email:
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </label>
                <label>Password:
                  <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </label>
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

// Login.propTypes = {
//   userSignupRequest: React.PropTypes.func.isRequired
// }


export default Login
