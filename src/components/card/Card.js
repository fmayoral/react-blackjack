import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  const getImageFileName = () => {
    const { rank, suit } = card;
    const suitName = suit.toLowerCase();
    let rankName = rank.toLowerCase();
    
    // Handle 10 and face cards
    if (rankName === 'jack') rankName = 'jack';
    else if (rankName === 'queen') rankName = 'queen';
    else if (rankName === 'king') rankName = 'king';
    else if (rankName === 'ace') rankName = 'ace';
    
    return `${rankName}_of_${suitName}.png`;
  };

  return (
    <div className="card">
      <img src={`/resources/cards/${getImageFileName()}`} alt={`${card.rank} of ${card.suit}`} />
    </div>
  );
};

export default Card;
