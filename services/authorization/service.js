const config = require('../../common/config/env.config.js').AuthorizationConfig;
const http = require('http');
const express = require('express');
const { createTerminus } = require('@godaddy/terminus');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

const authorizationRouter = require('./routes.config');
const { handleSuccessfulConnection, check } = require('../../common/services/healthcheck.service.js');

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

authorizationRouter
    .routesConfig(app);

function onSignal() {
    console.log('Server is starting cleanup');
}

async function onHealthCheck () {
    check()
        .then(handleSuccessfulConnection(exit))
        .catch(handleUnsuccessfulConnection(exit));
    console.log('Server is healthy');
}

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send('Authorization API')
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

createTerminus(server, {
    signal: 'SIGINT',
    healthChecks: {'/healthcheck': onHealthCheck },
    onSignal
 })

app.listen(config.port, function () {
    console.log('Server has started at port %s', config.port);
});