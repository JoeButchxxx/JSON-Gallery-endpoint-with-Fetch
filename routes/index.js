const express = require('express');

const Router = express.Router();

Router.use(function (request, response, next) {
  response.locals = {
    siteTitle: "CPNT-262-A4",
    tagline: "JSON",
    copyright: "&copy; Joseph Butcher Studios 2021"
  }
  next();
})


Router.get("/", function (request, response) {
  response.render('./pages/index', {
    pageTitle: "Home Page"
  });
})


Router.get('/', function (request, response) {
  response.status(404);
  response.render('./pages/404', {
    pageTitle: "404 Page"
  });
})

module.exports = Router;