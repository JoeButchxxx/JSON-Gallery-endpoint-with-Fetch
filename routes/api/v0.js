const express = require('express');
const router = express.Router();

const imageObject = require('../../data/gallery');
router.get('/gallery', (req, res) => {

  res.json(imageObject);


});
module.exports = router;