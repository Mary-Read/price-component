const express = require('express');
const app = express();
const port = 2000;
const db = require('./Data/db.js')
const bodyParser = require('body-parser');
const path = require('path');
let router = express.Router();

// const items = require('./Routes/item.js');
const directory = path.join(__dirname, '/../Client/dist');

app.use('/price/', router);

app.use(express.static(directory));

app.get(['/', '/p/*'], (req, res) => {
  res.sendFile(path.join(directory, 'index.html'));
});

router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/all', (req, res) => {
  db.find({})
    .then((allRecords) => {
      res.send(allRecords)
    })
})




router.get('/:itemId', (req, res) => {
  //send requested price based on user id
    db.find({itemId: req.params.itemId})
      .then((price) => {
        let searchedPrice = {
          price: price[0].price

        }
        res.send(searchedPrice)
      })
});


app.listen(port, () => {
  console.log(`Price Component listening at http://localhost:${port}`)
})




