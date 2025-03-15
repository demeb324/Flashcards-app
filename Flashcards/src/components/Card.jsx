import React from "react";

const Card = ({ card, flipped, setFlipped }) => {
  
  const handleFlipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card" onClick={handleFlipCard}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <div className="card-front">
          {card.question}
        </div>
        <div className="card-back">
          {card.answer}
        </div>
      </div>
    </div>
  );
};

export default Card;