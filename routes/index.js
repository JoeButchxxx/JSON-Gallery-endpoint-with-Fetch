const express = require('express')

const router = express.Router()

app.get('/', (req, res){
  res.render('pages/index')
})

app.get('/index', (req, res){
  res.render('pages/index')
})

module.exports = () => {
  router.get('/', (req, res){
    response.render('pages/index', { pageTitle: 'Gallery' })
  })
  return router;
}