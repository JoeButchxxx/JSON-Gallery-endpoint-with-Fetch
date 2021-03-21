// Downloaded Dependencies
const express = require('express');
const index = require('./routes');
const v0 = require('./routes/api/v0')

const app = express();
app.set('view engine', 'ejs');


app.use(express.static('./public'));

app.use("/", index);
app.use('/api/v0', v0);

// ** Custom 404 Response **
app.use((req, res) => {
  res.status(404)
  res.redirect('/404')
});

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}.`)
});