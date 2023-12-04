const config = require('../../common/config/env.config').AuthorizationConfig;
const router = require('express').Router();
const request = require('request');

router.post('/auth', function (req, res) {
    request({method: req.method, uri: config.apiEndpoint + req.path, json: req.body}, function (e, response, body) {
        res.status(response.statusCode);
        res.send(response.body)
    })});

module.exports = router;