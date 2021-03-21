const express = require('express');
const router = express.Router();

const imageObject = require('../../data/gallery');



router.get('/gallery', function (request, Response) {

  res.json(gallery)

});

module.exports = router