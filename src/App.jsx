import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import logo from './logo.svg';

import './App.css';
import { getMovieById, getMovieSearch } from './features/movies';

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.search);
  useEffect(() => {
    dispatch(getMovieById('tt3896198'));
    dispatch(getMovieSearch('spiderman'));
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer">
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
