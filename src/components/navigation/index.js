import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './index.css';

const Navigation = ({ location }) => {
  if (location.pathname !== '/') {
    return (
      <React.Fragment>
        <Link to="/upload">Upload</Link>
        <Link to="/magic">Magic</Link>
        <Link to="/about">About Us</Link>
      </React.Fragment>
    )
  }
  return '';
}

export default withRouter(Navigation);