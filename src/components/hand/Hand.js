import React from 'react';
import Card from '../card/Card';
import './Hand.css';

const Hand = ({ hand, total, label }) => {
  return (
    <div className="hand">
      <h2 className="hand-label">{label}</h2>
      <h3>Total: {total}</h3>
      <div className="cards">
        {hand.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Hand;
