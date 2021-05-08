const faker = require('faker');
let priceModel = require('./db.js')

const seedDataBase = () => {
  const getColors = () => {
    let colors = [];
    for(let c = 0; c < 5; c++) {
      colors.push(faker.commerce.color())
    }
    return colors;
  }

  let recordsContainer = [];

    console.log('Seeding DB')
    for(let i = 0; i < 100; i++) {
      let itemColors =  getColors();
      let newPriceRecord =
        {
        itemId: i,
        price: faker.commerce.price(),
        colors: itemColors
        }
      recordsContainer.push(newPriceRecord);
    }
  priceModel.deleteMany({})
    .then(() => {
      priceModel.insertMany(recordsContainer)
        .then(() => {
         console.log("Save Data to DB Success")
         return process.exit(0);
        })
        .catch((err) => {
          console.log('Save Data Error:', err)
        })
    })
}

seedDataBase()
/*
echo "<body><script src="http://localhost:8080/bundle.js"></script><script src="http://localhost:1166/bundle.js"></script><div id="Info">Des</div><div id="Gallery">Rev</div>" >> proxy.html
*/