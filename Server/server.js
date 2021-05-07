const express = require('express');
const app = express();
const port = 2000;
const db = require('./Data/generateData.js')

app.get('/', (req, res) => {
});

app.listen(port, () => {
  console.log(`Price Component listening at http://localhost:${port}`)
})




