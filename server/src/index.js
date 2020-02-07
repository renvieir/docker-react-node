const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, resp) => {
  const items = [
    {
      id: "123456",
      imgUrl: "https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png",
      title: "Modelo Negra",
      description: "12 Unit * 33oz Bottle",
      price: "RD$43/Unit",
      promo: "Buy 3, get 1 free redbull or Pepsi black",
    },
    {
      id: "234567",
      imgUrl: "https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png",
      title: "Modelo Negra",
      description: "12 Unit * 33oz Bottle",
      price: "RD$43/Unit",
      promo: "Buy 3, get 1 free redbull or Pepsi black",
    },
    {
      id: "345678",
      imgUrl: "https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png",
      title: "Modelo Negra",
      description: "12 Unit * 33oz Bottle",
      price: "RD$43/Unit",
      promo: "Buy 3, get 1 free redbull or Pepsi black",
    },
    {
      id: "456789",
      imgUrl: "https://qa-m1-dr.abi-sandbox.net/media/catalog/product/-/R/-R002151.png",
      title: "Modelo Negra",
      description: "12 Unit * 33oz Bottle",
      price: "RD$43/Unit",
      promo: "Buy 3, get 1 free redbull or Pepsi black",
    }
  ];
  return resp.json(items);
});

app.listen(5000);