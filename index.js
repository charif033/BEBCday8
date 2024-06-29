const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const products = [];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(products => products.id === id);
    res.json(product);
});

app.post('/products', (req, res) => {
    products.push(req.body);
    res.json(products);
});

app.put('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex(products => products.id === id);
    products[index] = req.body
    res.json(products);
});

app.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex(products => products.id === id);
    products.splice(index, 1);
    res.json(products);
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});