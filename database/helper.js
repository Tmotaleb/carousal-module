const {db, Carousal} = require('./index.js')

var save = (input) => {

 return Carousal.insertMany(input)
  .then((data) => {
    console.log(data, 'data inserted')
  })
  .catch((err) => {
    console.log(err)
  })
}

module.exports = {save};