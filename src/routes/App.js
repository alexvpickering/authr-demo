import React from 'react'
import Container from '../shared/Container'
import PageHeader from '../shared/PageHeader.js'
import Button from '../shared/Button.js'

const App = (props) => {

  const onClick = () => {
    localStorage.removeItem('authr_jwt')
    props.history.push('/login')
  }

  return (
    <div>
      <PageHeader>
        <Container>
          <h1>R Widgets App</h1>
          <p>This is an example app for <a href="https://github.com/alexvpickering/authr">authr</a>.</p>
        </Container>
      </PageHeader>
      <Container>
        <Button onClick={onClick}>Logout</Button>
      </Container>
    </div>
  )
}


export default App
