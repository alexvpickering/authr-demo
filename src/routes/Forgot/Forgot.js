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


class Forgot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
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

    this.props.userForgotRequest({
      email: this.state.email
    })

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
                <label>Email:
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </label>
                <Button>Submit</Button>
              </form>
            </Space3>
          </Space4>
        </Container>
      </div>

    )
  }
}

// Forgot.propTypes = {
//   userSignupRequest: React.PropTypes.func.isRequired
// }


export default Forgot
