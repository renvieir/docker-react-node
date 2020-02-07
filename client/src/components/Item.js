import React, { useState } from 'react';
import './Item.css';

function Item(props) {
  const {item} = props;
  const [counter, setCounter] = useState(0);

  function updateCounter(offset) {
    if (counter === 0 && offset < 0) {
      return;
    }
    setCounter(counter+offset);
  }

  return (
    <li className="item--container">
      <img alt="beverage" className="item--image" src={item.imgUrl} />
      <p className="item--title">{item.title}</p>
      <p className="item--description">{item.description}</p>
      <p className="item--price">{item.price}</p>
      <p className="item--promo">{item.promo}</p>
      <p className="item--link">View details</p>
      <div className="input-group">
        <button className="button--circle button--image image--minus" onClick={() => updateCounter(-1)} disabled={counter < 1}></button>
        <p className="counter">{counter}</p>
        <button className="button--circle button--image image--plus" onClick={() => updateCounter(+1)}></button>
        <button className="button--primary" onClick={() => console.log("add "+counter)} disabled={counter < 1}>add</button>
      </div>
    </li>
  );
}

export default Item;