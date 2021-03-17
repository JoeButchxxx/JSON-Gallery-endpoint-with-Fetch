const path = require('path');
const express = require('express');

const definitions = require('./data/definitions');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

/***********/
/* .json() */
/***********/

// JSON -> application/json
app.get('/api/v0/definitions', (req, res) => {
  res.json(definitions);
})


app.use(function (req, res) {
  res.status(404).end();
});

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}.`)
})