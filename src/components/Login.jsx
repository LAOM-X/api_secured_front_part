/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import {
  Button, Form, Row, Container, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../contexts/useAuth';
import api from '../utils/api';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const navigate = useNavigate();
  const from = '/userlist';
  const { setAuth } = useAuth();

  useEffect(() => {
    setToken(token);
    setAuth({ token });
    if (token) { navigate(from, { replace: true }); } 
  }, [navigate, setAuth, token]);

  function login(e) {
    e.preventDefault();
    api.login(email, password);
    setToken(window.localStorage.getItem('user_data_storage_key'));   
  }
 
  return (
    <div className="App">

     
      <Container>
        <Row md="auto" className="justify-content-md-center">
        <Col className='form'>
        <h2 className='title-page'>Login</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)}
              value={email}/>
          <Form.Text className="text-muted">
            We ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}
              value={password}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={login}>
          Login
        </Button>
        <Link to="/createuser">
            <span>Want to create an account ? Click here !</span>
          </Link>
      </Form>
      </Col>
      </Row>
      </Container>
    </div>
  );
};

Login.propTypes = PropTypes;
export default Login;
