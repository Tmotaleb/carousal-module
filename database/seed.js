const faker = require('faker');
const {db, Carousal} = require('./index.js')
const {coffeeTable, studySpace} = require('./photo.js');
const method = require('./helper.js')

//function to get a number of random images
const randomImage = (arr, num) => {
  var storage = [];
  for (var i = 0; i < arr.length; i++) {
    var randomIndex = arr[Math.floor(Math.random() * arr.length)];
    if (storage.includes(randomIndex)) {
      continue;
    }
    storage.push(randomIndex);
  }
  return storage.slice(0, num);
}

//generate 100 listings
  for (var i = 0; i < 3; i++) {
    var coffeeImage = randomImage(coffeeTable, 5);
    var spaceImage = randomImage(studySpace, 5);

      var fakeData = {
      address: faker.address.streetAddress(),
      photos: [spaceImage[0], coffeeImage[1], spaceImage[1], coffeeImage[2], spaceImage[2],spaceImage[3], coffeeImage[3], spaceImage[4], coffeeImage[0]]
   }
  }

var listing = new Carousal(fakeData)
method.saveData(listing);
