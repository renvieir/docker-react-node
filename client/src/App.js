import React from 'react';
import './App.css';
import Item from './Item';

function App() {
  return (
    <div id="app">
      <main>
        <div className="container">
          <Item imgSrc="https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png" />
          <Item imgSrc="https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png" />
          <Item imgSrc="https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png" />
          <Item imgSrc="https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png" />
        </div>
      </main>
    </div>
  );
}

export default App;
