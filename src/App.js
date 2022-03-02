/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import UserList from './components/UserList';
import NonConnected from './components/NonConnected';
import RequireAuth from './utils/RequireAuth';

const App = () => (
  <div className="App">
    <Routes>
      <Route exact path="/" element={<Outlet />}>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/createuser" element={<CreateUser />} />
        <Route exact path="/*" element={<NonConnected />} />
        <Route element={<RequireAuth />}>
          <Route exact path="/userlist" element={<UserList />} />
        </Route>
      </Route>
    </Routes>
  </div>
);

export default App;
