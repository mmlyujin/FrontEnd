import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Navbar