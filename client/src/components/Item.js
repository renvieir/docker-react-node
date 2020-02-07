import React, { useState } from 'react';
import './Item.css';
import {Button, CircleButton} from './Buttons';

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
      <div className="button-group">
        <CircleButton handleClick={() => updateCounter(-1)} minus disabled={counter < 1} />
        <p className="counter">{counter}</p>
        <CircleButton handleClick={() => updateCounter(+1)} plus />
        <Button handleClick={() => console.log("add "+counter)} disabled={counter < 1}>add</Button>
      </div>
    </li>
  );
}

export default Item;