import React from 'react';
import './ItemCards.scss';

export default function ItemCards(props) {
  const { cardTitle, cardAlt, cardImg, cardText } = props;
  console.log(cardImg);
  return (
    <div className="card">
      <img src={cardImg} alt={cardAlt} />
      <h3>{cardTitle}</h3>
      <p>{cardText}</p>
    </div>
  );
}
