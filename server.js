// Downloaded Dependencies
const path = require('path');
const express = require('express');
const index = require('./routes')

const app = express();


// ** Middleware ** 

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use("/", index);



// ** Custom 404 Response **
app.use((req, res) => {
  res.status(404)
  res.sendFile(__dirname + '/public/404.html')
});

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}.`)
})