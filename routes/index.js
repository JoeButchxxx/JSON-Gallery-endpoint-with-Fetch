const express = require('express')
const router = express.Router()
const config = require('../data/gallery')

router.use((req, res, next) => {
  res.locals = config
  next()
})

router.get('/pages', (req, res) => {
  res.render('pages/index', { pageTitle: "Home Page" })
})

router.get('/pages', (req, res) => {
  res.render('pages/login', { pageTitle: "Login Page" })
})

router.get('/pages', (req, res) => {
  res.render('pages/register', { pageTitle: "Registry Page" })
})

router.get('/pages', (req, res) => {
  res.render('pages/404', { pageTitle: "404 Page" })
})

module.exports = router;