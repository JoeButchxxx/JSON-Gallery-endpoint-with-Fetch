// Downloaded Dependencies
const express = require('express');
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, './public')));
// Views Engine
app.set('view engine', 'ejs');

// ** Custom 404 Response **
//app.use((req, res) => {
//res.status(404)
//res.send('pages/404.ejs', '404')
//})
//Listener
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
});