/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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

      <h1>Login</h1>
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

            <Button as={Col} md="auto" xs="auto" onClick={login} >
              Login
            </Button>
            <Link to="/createuser">
            <span>
                Create user
            </span>
            </Link>

        </form>

      </div>

    </div>
  );
};

Login.propTypes = PropTypes;
export default Login;
