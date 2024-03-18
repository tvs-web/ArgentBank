import React from 'react';
import './Form.scss';
import { Link } from 'react-router-dom';
import '../Button/Button.scss';

export default function Form(props) {
  const { formIcone } = props;
  return (
    <div className="form">
      <i className={formIcone}></i>
      <h1> Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" list="usernames" id="email" required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Link to="/user">
          <button className="sign-in-button">Sign In</button>
        </Link>
      </form>
    </div>
  );
}
