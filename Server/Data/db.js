const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/price', {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Connection to DB FAILED:==> ',err);
  })

  const priceSchema = new mongoose.Schema({
    itemId: Number,
    price: Number,
    colors: [String]
  });

  const priceModel = mongoose.model('priceModel', priceSchema);


module.exports = priceModel;