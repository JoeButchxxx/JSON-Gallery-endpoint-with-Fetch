const express = require('express');
const router = express.Router();
const config = require('../config');


router.use((require, response, next) => {
  response.locals = config
  next()
})

router.get('/', (request, response) => {
  response.render('pages/index', { pageTitle: 'Home' })
})


router.get('/404', function (request, response) {
  response.status(404);
  response.render('pages/404', { pageTitle: "404 Page" });
})


module.exports = router