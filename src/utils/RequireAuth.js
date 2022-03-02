import { useLocation, Navigate, Outlet } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import useAuth from '../contexts/useAuth';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return (
    (auth?.token)
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  );
};

RequireAuth.propTypes = PropTypes;
export default RequireAuth;
