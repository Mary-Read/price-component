const express = require('express');
const app = express();
const port = 2000;
const db = require('./Data/db.js')
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../Client/dist'));

app.get('/price/all', (req, res) => {
  db.find({})
    .then((allRecords) => {
      res.send(allRecords)
    })
})

app.get('/price/:itemId', (req, res) => {
  //send requested price based on user id
  console.log('itemId:', req.params.itemId)
    db.find({itemId: req.params.itemId})
      .then((price) => {
        let searchedPrice = {price: price[0].price}
        res.send(searchedPrice)
      })
});


app.listen(port, () => {
  console.log(`Price Component listening at http://localhost:${port}`)
})




