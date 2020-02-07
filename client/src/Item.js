import React, { useState } from 'react';
import './Item.css';

function Item(props) {
  const [counter, setCounter] = useState(0);

  function updateCounter(offset) {
    if (counter === 0 && offset < 0) {
      return;
    }
    setCounter(counter+offset);
  }

  return (
    <li className="item--container">
      <img alt="beverage" className="item--image" src={props.imgSrc} />
      <p className="item--title">Modelo Negra</p>
      <p className="item--description">12 Unit * 33oz Bottle</p>
      <p className="item--price">RD$43/Unit</p>
      <p className="item--stock">Buy 3, get 1 free redbull or Pepsi black</p>
      <p className="item--link">View details</p>
      <div className="input-group">
        <button disabled={counter < 1} className="button--circle" onClick={() => updateCounter(-1)}>-</button>
        <p className="counter">{counter}</p>
        <button className="button--circle" onClick={() => updateCounter(+1)}>+</button>
        <button disabled={counter < 1} className="button--primary">add</button>
      </div>
    </li>
  );
}

export default Item;