import React, { useState } from 'react';
import './Account.scss';
import Accounts from '../../Utils/account.json';
import AccountCards from '../AccountCards/AccountCards';
export default function Account(props) {
  const { background } = props;
  return (
    <div className="account" style={{ backgroundColor: background }}>
      {Accounts.map(({ id, amount, title, description }) => {
        return (
          <AccountCards
            key={id}
            cardId={id}
            cardAmount={amount}
            cardTitle={title}
            cardDescription={description}
          />
        );
      })}
    </div>
  );
}
