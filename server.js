const path = require('path');
const express = require('express');
const app = express();

const gallery = require('./');


app.use(express.static(path.join(__dirname, 'public')));

/***********/
/* .json() */
/***********/

// JSON -> application/json
app.get('/api/v0/', (req, res) => {
  res.json();
})


app.use(function (request, response) {
  response.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}.`)
})