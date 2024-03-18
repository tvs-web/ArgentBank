import React from 'react';
import './Button.scss';
export default function Button(props) {
  const { buttonText, onClick } = props;
  return (
    <div>
      <button className="saveCancel" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}
