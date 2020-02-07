import React from 'react';
import './App.css';
import './Main.css';
import Item from './components/Item';

function App() {

  const itens = [
    {
      imgUrl: "https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png",
      title: "Modelo Negra",
      description: "12 Unit * 33oz Bottle",
      price: "RD$43/Unit",
      promo: "Buy 3, get 1 free redbull or Pepsi black",
    },
    {
      imgUrl: "https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png",
      title: "Modelo Negra",
      description: "12 Unit * 33oz Bottle",
      price: "RD$43/Unit",
      promo: "Buy 3, get 1 free redbull or Pepsi black",
    },
    {
      imgUrl: "https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png",
      title: "Modelo Negra",
      description: "12 Unit * 33oz Bottle",
      price: "RD$43/Unit",
      promo: "Buy 3, get 1 free redbull or Pepsi black",
    },
    {
      imgUrl: "https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png",
      title: "Modelo Negra",
      description: "12 Unit * 33oz Bottle",
      price: "RD$43/Unit",
      promo: "Buy 3, get 1 free redbull or Pepsi black",
    }
  ]

  return (
    <div id="app">
      <main>
        <ul>
          { itens.map(item => <Item item={item} />) }
        </ul>
      </main>
    </div>
  );
}

export default App;
