const path = require('path');
const express = require('express');
const router = require('./routes/index');


app.use(express.static(path.join(__dirname, 'views/index')));

/***********/
/* .json() */
/***********/

// JSON -> application/json
app.get('/api/v0/', (req, res) => {
  res.json();
})


app.use(function (request, response) {
  response.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}.`)
})