import './index.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../context/main';

function Home() {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div>
      <Link to="/upload">
        Get Started
      </Link>
      <button onClick={() => dispatch({ type: 'incrementCount' })}>{state.count}</button>
    </div>
  );
}

export default Home;
