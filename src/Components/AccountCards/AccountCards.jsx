import React from 'react';
import './AccountCards.scss';
import Button from '../Button/Button';
export default function AccountCards(props) {
  const {
    cardTitle,
    cardAmount,
    cardDescription,
    backgroundColor,
    cardsTextColor,
  } = props;

  return (
    <div
      className="accountcard"
      style={{ backgroundColor: backgroundColor, color: cardsTextColor }}
    >
      <div className="cards">
        <p>{cardTitle}</p>
        <h3>{cardAmount}</h3>
        <p>{cardDescription}</p>
      </div>
      <div className="account_button">
        <Button buttonText="View transactions" />
      </div>
    </div>
  );
}
