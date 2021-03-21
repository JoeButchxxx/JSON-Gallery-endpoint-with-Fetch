const express = require('express');
const router = express.Router();

const gallery = require('../../data/gallery.js');



router.get('/gallery', function (request, Response) {

  res.json(gallery)

});

module.exports = router