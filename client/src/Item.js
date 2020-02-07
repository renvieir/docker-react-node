import React, { useState } from 'react';
import './Item.css';

function Item(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="item--container">
      <img className="item--image" src={props.imgSrc} />
      <p className="item--title">Modelo Negra</p>
      <p className="item--description">12 Unit * 33oz Bottle</p>
      <p className="item--price">RD$43/Unit</p>
      <p className="item--stock">Buy 3, get 1 free redbull or Pepsi black</p>
      <a href="#">View details</a>
      <form>
          <div className="input-group">
            <input type="button" value="-" onClick={() => setCounter(counter-1)}/>
            <input type="text" value={counter}/>
            <input type="button" value="+" onClick={() => setCounter(counter+1)}/>
            <input type="submit" value="add"/>
          </div>
      </form>
    </div>
  );
}

export default Item;