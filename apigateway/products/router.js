const config = require('../../common/config/env.config').ProductsConfig;
const router = require('express').Router();
const request = require('request');

router.get('/products', function (req, res) {
    let headers = req.headers;
    delete headers['content-length'];
    delete headers['host'];
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: headers, json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

router.get('/products/:productId', function (req, res) {
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: req.headers, json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

router.post('/products', function (req, res) {
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: req.headers,  json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

router.delete('/products/:prouctId', function (req, res) {
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: req.headers,  json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

module.exports = router;