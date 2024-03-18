import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './FormEdit.scss';

export default function FormEdit() {
  console.log('Clic sur le bouton !');
  return (
    <div className="formedit">
      <h1> Edit user info</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">User name :</label>
          <input type="text" list="usernames" id="email" required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First name :</label>
          <input className="bis" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last name :</label>
          <input className="bis" />
        </div>

        <Link to="/user">
          <div className="edit_button">
            <Button className="toto" buttonText="Save" />
            <Button buttonText="Cancel" />
          </div>
        </Link>
      </form>
    </div>
  );
}
