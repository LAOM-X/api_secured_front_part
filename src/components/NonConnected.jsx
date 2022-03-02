import React from 'react';
import { Link } from 'react-router-dom';

const NonConnected = () => (
  <div>
    <p>ce que vous faites est très étrange.....</p>
    <Link to="/login">
      <p>Cliquez sur ce lien pour vous connecter</p>
    </Link>
  </div>
);

export default NonConnected;
