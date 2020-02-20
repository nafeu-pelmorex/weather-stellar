import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.css';

const locationTitleMapping = {
  '/': 'Get Started',
  '/upload': 'Upload',
  '/magic': 'Magic',
  '/about': 'About Us'
};

const Title = ({ location }) => {
  if (location.pathname !== '/') {
    return (
      <div>{locationTitleMapping[location.pathname]}</div>
    )
  }
  return '';
}

export default withRouter(Title);