// Downloaded Dependencies
const express = require('express');
const index = require('./routes');


const app = express();
app.set('view engine', 'ejs');
const path = require("path");

app.use(express.static(path.join(__dirname, './public')));

app.use("/", index);


// ** Custom 404 Response **
//app.use((req, res) => {
//res.status(404)
// res.send('404.ejs', '404')
//});

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}.`)
});