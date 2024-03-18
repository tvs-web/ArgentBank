import React from 'react';
import './SignIn.scss';
export default function SignIn(props) {
  const { signInIcone } = props;
  return (
    <div className="signIn">
      <i className={signInIcone}></i>
    </div>
  );
}
