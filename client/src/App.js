import React from 'react';
import './App.css';

function Container(props) {
  return (<div className="container">{props.children}</div>);
}

function Item() {
  return (
    <>
      <img width="80" height="80" src="https://images-na.ssl-images-amazon.com/images/I/41nE19Ab-KL.png" />
      <p>Say hello to nyan cat</p>
    </>
  );
}

function App() {
  return (
    <div id="app">
      <main>
        <Container>
          <Item />
        </Container>
      </main>
    </div>
  );
}

export default App;
