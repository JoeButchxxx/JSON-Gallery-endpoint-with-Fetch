const express = require('express')
const imageObject = require('../../data/gallery')

const router = express.Router()
router.get('/gallery', (require, response) => {

  response.json(imageObject)


});
module.exports = router