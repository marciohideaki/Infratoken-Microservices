const config = require('../../common/config/env.config').OrdersConfig;
const router = require('express').Router();
const request = require('request');

router.get('/orders', function (req, res) {
    let headers = req.headers;
    delete headers['content-length'];
    delete headers['host'];
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: headers, json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

router.get('/orders/:orderId', function (req, res) {
    console.log(req.path);
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: req.headers, json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

router.post('/orders', function (req, res) {
    console.log(req.path);
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: req.headers,  json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

router.delete('/orders/:orderId', function (req, res) {
    console.log(req.path);
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: req.headers,  json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

module.exports = router;