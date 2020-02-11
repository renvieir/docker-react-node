import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <button
      className="button--primary "
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
