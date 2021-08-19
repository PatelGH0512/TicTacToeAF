import React from 'react';
import Board from './components/Board';
import './styles/root.css';

const App = () => {
  return (
    <div className="app">
      <h1>TicTacToe App</h1>
      <Board />
    </div>
  );
};
export default App;
