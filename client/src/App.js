import React from 'react';
import './App.css';
import './Main.css';
import Item from './Item';

function App() {
  return (
    <div id="app">
      <main>
        <ul>
          <Item imgSrc="https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png" />
          <Item imgSrc="https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png" />
          <Item imgSrc="https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png" />
          <Item imgSrc="https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png" />
        </ul>
      </main>
    </div>
  );
}

export default App;
