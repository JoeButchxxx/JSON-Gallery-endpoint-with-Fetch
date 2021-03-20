const express = require('express')

const Router = express.Router()

Router.use(function (request, response, next) {
  response.locals = {

  }
  next();
})


Router.get("/", function (request, response) {
  response.render('index', { pageTitle: "Home Page" })
})


Router.get('/pages', (request, response) => {
  response.render('pages/404', { pageTitle: "404 Page" })
})

module.exports = Router;