import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
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

  return (
    <div className="App">
      <h1>Create account</h1>
      <div className="email-page">
        <form autoComplete="off">
          <p className="form-group">
            <input
              modifier="material"
              placeholder="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </p>

          <p className="form-group">
            <input
              modifier="material"
              placeholder="Password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </p>

          <Button
            md="auto"
            xs="auto"
            variant="secondary"
            onClick={createAccount}
          >
            Register
          </Button>
          <Link to="/login">
            <span>Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

CreateUser.propTypes = PropTypes;
export default CreateUser;
