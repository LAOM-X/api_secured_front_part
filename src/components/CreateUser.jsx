import React, { useState } from 'react';
import {
  Button, Form, Row, Container, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import api from '../utils/api';
import useAuth from '../contexts/useAuth';

const CreateUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  function createAccount(e) {
    e.preventDefault();
    setAuth({});
    api.createAccount(email, password);
    navigate('/login');
  }
  // eslint-disable-next-line no-console
  console.log(email);

  return (
    <div className="App">
      <Container>
        <Row md="auto" className="justify-content-md-center">
        <Col className="form ">
        <h2 className="title-page">Create account</h2>
        <Form>
        <Form.Group className="md-3" controlId="formBasicEmail">
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
        <Button variant="secondary" type="submit" onClick={createAccount}>
          Register
        </Button>
        <Link to="/login">
            <span>Already have an account ? Login here !</span>
          </Link>
      </Form>
      </Col>
      </Row>
      </Container>
    </div>
  );
};

CreateUser.propTypes = PropTypes;
export default CreateUser;
