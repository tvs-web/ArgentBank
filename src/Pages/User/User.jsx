import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Logo from '../../assets/argentBankLogo.png';
import Footer from '../../Components/Footer/Footer';
import Edition from '../../Components/Edition/Edition';
import Button from '../../Components/Button/Button';
import FormEdit from '../../Components/FormEdit/FormEdit';
import AccountCards from '../../Components/AccountCards/AccountCards';
import Accounts from '../../Utils/account.json';

import './User.scss';

export default function User() {
  const [showForm, setShowForm] = useState(false);
  const [background, setBackground] = useState('#12002b');
  const [cardsBackground, setCardsBackground] = useState('white');
  const [cardsTextColor, setCardsTextColor] = useState('black');
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const clickButton = () => {
    setBackground(background === '#12002b' ? 'white' : '#12002b');
    setCardsBackground(cardsBackground === '#12002b' ? 'white' : '#12002b');
    setCardsTextColor(cardsTextColor === 'white' ? 'black' : 'white');
  };

  return (
    <div className="user">
      <Header
        headerLogo={Logo}
        headerAlt="ArgentBank"
        headerIconNav1="fa fa-user-circle"
        headerIconNav2="fa fa-sign-out"
        headerNav2="Name"
        headerNav1="Sign Out"
      />
      <main style={{ backgroundColor: background }}>
        {showForm ? (
          <FormEdit />
        ) : (
          <>
            <Edition />
            <div className="button">
              <Button
                className="edit_button"
                buttonText="Edit Name"
                onClick={() => {
                  toggleForm();
                  clickButton();
                }}
                formIcone="fa fa-sign-out"
              />
            </div>
          </>
        )}
        <div className="account">
          {Accounts.map(({ id, amount, title, description }) => {
            return (
              <AccountCards
                key={id}
                cardId={id}
                cardAmount={amount}
                cardTitle={title}
                cardDescription={description}
                backgroundColor={cardsBackground}
                cardsTextColor={cardsTextColor}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
