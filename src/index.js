import React from 'react';
import ReactDOM from 'react-dom';
import Application from './App';
import './app.css';

const PLAYERS = [
  {
    name: "Liam Webb",
    score: 48,
    key: 1
  },
  {
    name: "Shanxi Jen",
    score: 35,
    key: 2
  },
  {
    name: "John Doe",
    score: 46,
    key: 3
  }
];

ReactDOM.render(
  <Application players={PLAYERS}/>,
  document.getElementById('root')
);
