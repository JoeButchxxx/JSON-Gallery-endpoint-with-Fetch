const path = require('path');
const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));



app.get('/api/v0/', (req, res) => {
  res.json();
})


app.use(function (request, response) {
  response.status(404).sendFile(path.join(__dirname, ''));
});

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}.`)
})