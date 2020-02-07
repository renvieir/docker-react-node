import React, { useState, useEffect } from 'react';
import './App.css';
import './Main.css';
import Item from './components/Item';
import api from './services/api';

function App() {

  const [itens, setItens] = useState([]);

  useEffect(() => {
    async function loadItens() {
      const response = await api.get('/');
      setItens(response.data);
    }
    loadItens();
  }, []);

  return (
    <div id="app">
      <main>
        <ul>
          { itens.map(item => <Item key={item.id} item={item} />) }
        </ul>
      </main>
    </div>
  );
}

export default App;
