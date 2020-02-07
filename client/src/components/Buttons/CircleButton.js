import React from 'react';
import './CircleButton.css';

export default function CircleButton(props) {
  return (
    <button
      className={"button--circle button--image " + (props.minus ? "image--minus": "image--plus")}
      onClick={props.handleClick}
      disabled={props.disabled}
    >
    </button>
  );
}
