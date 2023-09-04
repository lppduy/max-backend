// const http = require('http');

// const express = require('express');

// const app = express();

// app.use('/', (req, res, next) => {
//   console.log('This always run!');
//   next();
// });

// app.use('/add-product', (req, res, next) => {
//   console.log('In product middleware!');
//   res.send('<h1>The Add Product Page</h1>');
// });

// app.use('/', (req, res, next) => {
//   console.log('In main middleware!');
//   res.send('<h1>Hello from Express!</h1>');
// });

// const server = http.createServer(app);

// server.listen(3003);

const http = require('http');
const express = require('express');
const app = express();

// app.use((req, res, next) => {
//   console.log('First middleware :vvv');
//   next();
// });

// app.use((req, res) => {
//   console.log('Second middleware :vvv');
//   res.send('<h1>Solve the world :3 </h1>');
// });

app.use('/users', (req, res, next) => {
  console.log('/users middleware');
  res.end('<p>users page here</p>');
});

app.use('/', (req, res, next) => {
  console.log('/ middleware');
  res.end('<p>Main page here</p>');
});

app.listen(3003, () => {
  console.log('Duy is coming to the webdev world');
});
