const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const PORT = 3000;
const app = express();


//const db = require('../database');

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})


app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
