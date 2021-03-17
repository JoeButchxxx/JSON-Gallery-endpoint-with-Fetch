const path = require('path');
const express = require('express');

const deefeffwefwefw = require('./');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

/***********/
/* .json() */
/***********/

// JSON -> application/json
app.get('/api/v0/', (req, res) => {
  res.json();
})


app.use(function (req, res) {
  res.status(404).end();
});

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}.`)
})