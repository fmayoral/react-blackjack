import React from 'react';
import './GameStatusModal.css';

const GameStatusModal = ({ status, onPlayAgain }) => {

  const statusDetails = {
    DEALER_WINS: {
      message: "Sorry, Dealer Wins!",
      color: "red",
    },
    PLAYER_WINS: {
      message: "Congratulations, You Win!",
      color: "green",
    },
    TIE: {
      message: "It's a Tie!",
      color: "orange",
    },
  };

  const currentStatus = statusDetails[status] || {
    message: "Game Over!",
    color: "grey",
  };

  return (
    <div className="status-modal" style={{ backgroundColor: currentStatus.color }}>
      <div className="modal-content">
        <p className="status-message">{currentStatus.message}</p>
        <button className="play-again-button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameStatusModal;
