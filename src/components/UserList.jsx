/* eslint-disable react/jsx-key */

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Table } from 'react-bootstrap';
import AuthContext from '../contexts/AuthProvider';
import api from '../utils/api';

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const { setAuth } = useContext(AuthContext);

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    api.userDisplayer({ setUserList });
  }, []);

  return (<div className="title-page">
     <h1>Table of users</h1>
     <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Index</th>
      <th>Email</th>
    </tr>
  </thead>
  {userList.map((element, index) => <tbody>
    <tr>
      <td>{index + 1}</td>
      <td>{element}</td>

    </tr>

  </tbody>)}
</Table>
        <ol>

     </ol>
        <Button as={Col} md="auto" xs="auto" variant="secondary" onClick={logout} >
          Log out
        </Button>
      </div>);
};

UserList.propTypes = PropTypes;
export default UserList;
