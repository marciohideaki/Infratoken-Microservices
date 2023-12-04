const config = require('../../common/config/env.config.js').UserConfig;
const express = require('express');

const app = express();
const usersRouter = require('./routes.config');

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

app.use(express.json());

usersRouter
    .routesConfig(app);

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send('Users API')
    }, 100)
})

app.get('/ping', (req, res) => {
    setTimeout(() => {
      res.send('PONG')
    }, 100)
})

app.get('/health', (req, res) => {
    setTimeout(() => {
      res.send('Server is healthy')
    }, 100)
})

app.listen(config.port, function () {
    console.log('Server has started at port %s', config.port);
});