import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './helpers';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(false);

  const winner = calculateWinner(board);

  const Message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;

  const handlerSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setisXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TicTacToe App</h1>
      <h2> {Message}</h2>
      <Board board={board} handlerSquareClick={handlerSquareClick} />
    </div>
  );
};
export default App;
