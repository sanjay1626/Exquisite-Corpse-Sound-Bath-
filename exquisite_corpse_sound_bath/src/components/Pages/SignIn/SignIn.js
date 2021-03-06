import React,{useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import PropTypes from 'prop-types'


async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
      <div id = "login-wrapper">
  <Container >
          <Form onSubmit={handleSubmit}>
            <h1>Please Log In</h1>
  <Form.Group  controlId="formBasicEmail">
    <Form.Label  >Email address</Form.Label>
    <Form.Control onChange={e => setUserName(e.target.value)} type="email" placeholder="Enter email"  />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={e => setUserName(e.target.value)} type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Container>


      </div>
  

  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}