const config = require('../../common/config/env.config').UserConfig;
const router = require('express').Router();
const request = require('request');

router.get('/users', function (req, res) {
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: req.headers, json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

router.get('/email/:email', function (req, res) {
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: req.headers, json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

router.get('/users/:userId', function (req, res) {
    console.log(req.path);
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: req.headers, json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

router.post('/users', function (req, res) {
    console.log(req.path);
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: req.headers,  json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

router.delete('/users/:userId', function (req, res) {
    console.log(req.path);
    request({method: req.method, uri: config.apiEndpoint + req.path, headers: req.headers,  json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

module.exports = router;