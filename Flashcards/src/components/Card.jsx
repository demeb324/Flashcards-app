import React, { useState } from "react";

const Card = (props) => {
    const [cardFlipped, setCardFlipped] = useState(props.flipped);
    const card = props.card;

    const handleFlipCard = () => {
        setCardFlipped(!cardFlipped);
    };

    return (
        <div className="card" onClick={handleFlipCard}>
            <div className={`card-inner ${cardFlipped ? "flipped" : ""}`}>
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

