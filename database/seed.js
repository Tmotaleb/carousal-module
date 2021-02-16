const faker = require('faker');
const {db, Carousal} = require('./index.js');
const {coffeeTable, studySpace, moreSpaces} = require('./photo.js');
const method = require('./helper.js');

//Generate 100 listings
  for (var i = 0; i <=5; i++) {
    var spaceImage = [...studySpace, ...coffeeTable];
    var address = faker.address.streetAddress();

      var fakeData = {
        address: address,
        photos: [spaceImage[0], spaceImage[1], spaceImage[2], spaceImage[3], spaceImage[4],spaceImage[5], spaceImage[6], spaceImage[7], spaceImage[8], spaceImage[9], spaceImage[10], spaceImage[11]],
        descriptionTxt: `Office space located at ${address}, with high ceilings and lots of natural lighting. We offer complementary high speed wifi, phone booth access, kitchen available with fridge, freezer, microwave, filtered water and unlimited coffee/tea. Members have access to roof deck, terrace and lounge areas. Conference rooms are fully equipped and on site upon request and for a limited time only.`,
        moreSpacesInfo:[]
   }

   //Add object listings to the fakerData.moreSpacesInfo array based on the number of images present in the the image array
   if (moreSpaces.length >= 1) {
     for (var i = 0; i < moreSpaces.length; i++) {
       fakeData.moreSpacesInfo.push({image: moreSpaces[i], location: faker.address.streetAddress(), office: faker.random.number({min: 100, max: 500}), member: faker.random.number({min: 1, max: 8}), info: `Spacious workspace complete with office furniture, overhead storage and file cabinets. Enjoy 24/7 access to all amenities. Conference rooms are available through booking and whiteboard walls are provided upon request. Please inquire for more information.`})
     }
   } else {
     fakeData.moreSpacesInfo.push('No listings available')
   }
  }

var listing = new Carousal(fakeData)
method.saveData(listing);

