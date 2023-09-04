const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  console.log('In product middleware!');
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>',
  );
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('In main middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);

server.listen(3003);
