const express = require('express');
const config = require('../config');
const router = express.Router();


router.use((request, response, next) => {
  response.locals = config
  next()
})

router.get('/', (request, response) => {
  response.render('pages/index', { pageTitle: 'Home' })
})


router.get('/', function (request, response) {
  response.render('pages/404', { pageTitle: "404 Page" });
})


module.exports = router