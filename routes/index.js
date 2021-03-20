const express = require('express')

const router = express.Router()



router.get('/pages', (req, res) => {
  res.render('index', { pageTitle: "Home Page" })
})


router.get('/pages', (req, res) => {
  res.render('pages/404', { pageTitle: "404 Page" })
})

module.exports = router;