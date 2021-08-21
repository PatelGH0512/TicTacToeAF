import React from 'react';

const Statusmessage = ({ winner, current }) => {
  //const message = winner

  const noMovesLeft = current.board.every(el => el != null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'Game tied!!!'}
    </h2>
  );
};

export default Statusmessage;
