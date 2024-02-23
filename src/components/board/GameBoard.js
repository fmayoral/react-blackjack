import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hand from '../hand/Hand';
import GameStatusModal from '../modal/GameStatusModal';
import './GameBoard.css';

const GameBoard = () => {
  const [game, setGame] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false); 

  const startNewGame = async () => {
    try {
      const { data } = await axios.post('/api/v1/blackjack/games');
      setGame(data);
    } catch (error) {
      console.error("Error starting a new game", error);
    }
  };

  const playAgain = () => {
    startNewGame();
    setShowStatusModal(false);
  };

  const playerAction = async (actionType) => {
    try {
      const { data } = await axios.post(`/api/v1/blackjack/games/${game.gameId}`, {
        action: actionType,
      });
      setGame(data);
      if (data.status !== 'IN_PROGRESS') {
        setShowStatusModal(true);
      }
    } catch (error) {
      console.error("Error performing player action", error);
    }
  };

  useEffect(() => {
    startNewGame();
    setShowStatusModal(false);
  }, []);

  if (!game) {
    return <p>Loading...</p>;
  }

  return (
    <div className="game-board">
      <h1>Blackjack Game</h1>
      <br/>
      <div className="hands">
        <Hand label="Dealer's Hand" hand={game.dealer.hand} total={game.dealer.total} />
        <Hand label="Your Hand" hand={game.player.hand} total={game.player.total}/>
      </div>

      <div className="actions">
        <button className="hit" onClick={() => playerAction('HIT')}>Hit</button>
        <button className="stand" onClick={() => playerAction('STAND')}>Stand</button>
      </div>

      {showStatusModal && 
        <GameStatusModal 
          status={game.status} 
          onPlayAgain={playAgain} 
        />
      }

    </div>
  );
};
export default GameBoard;
