const config = require('../common/config/env.config');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

const port = 8080;

const authorizationRouter = require('./authorization/router');
const usersRouter = require('./users/router');
const productsRouter = require('./products/router');
const ordersRouter = require('./orders/router');

const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  } else {
    return next();
  }
});

app.use('/api', authorizationRouter);
app.use('/api', usersRouter);
app.use('/api', productsRouter);
app.use('/api', ordersRouter);

app.get('/', (req, res) => {
  setTimeout(() => {
      res.send('API Gateway')
  }, 100)
})

app.get('/api/ping', (req, res) => {
  setTimeout(() => {
    res.send('PONG')
  }, 100)
})

app.get('/api/health', (req, res) => {
  setTimeout(() => {
    res.send('Server is healthy')
  }, 100)
})

app.listen(port, () => console.log(`API Gateway Listening on port ${config.port}!`));