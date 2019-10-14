const express = require('express');

const home = express.Router();

home.get("/index", require('./home/defalut'))

home.get('/article',require('./home/article'))

home.get('/logout',require('./home/logout'))

home.post('/common',require('./home/common'))

module.exports = home;