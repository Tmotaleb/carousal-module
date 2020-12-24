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
    var spaceImage = [...studySpace, ...coffeeTable];
    // var spaceImage = randomImage(allImg, 13);
    var address = faker.address.streetAddress();
    var office = faker.random.number({min: 100, max: 500});
    var member = faker.random.number({min: 1, max: 10});
    var location = faker.address.streetAddress();

    function checkMin(member) {
      if (member <= 1) {
        return `Private office located at ${location}. Complete with office furniture, overhead storage and file cabinets. Enjoy 24/7 access to all amenities. Conference rooms are available through booking and whiteboard walls are provided upon request.`
      } else {
        return `${member} team office located at ${location}. Complete with office furniture, overhead storage and file cabinets. Enjoy 24/7 access to all amenities. Conference rooms are available through booking and whiteboard walls are provided upon request.`
      }
    }

      var fakeData = {
      address: address,
      photos: [spaceImage[0], spaceImage[1], spaceImage[2], spaceImage[3], spaceImage[4],spaceImage[5], spaceImage[6], spaceImage[7], spaceImage[8], spaceImage[9], spaceImage[10], spaceImage[11]],
      descriptionTxt: `Office space located at ${address}, with high ceilings and lots of natural lighting. We offer complementary high speed wifi, phone booth access, kitchen available with fridge, freezer, microwave, filtered water and unlimited coffee/tea. Members have access to roof deck, terrace and lounge areas. Conference rooms are fully equipped and on site upon request and for a limited time only.`,
      moreSpacesInfo:[
        {image:'https://my-carousal-bucket.s3-us-west-1.amazonaws.com/more-info-img/morespacepic/194588533-KL-1024x680-1024x680.jpg', location: location, office: office, member: member, info: checkMin(member)},

        {image:'https://my-carousal-bucket.s3-us-west-1.amazonaws.com/more-info-img/morespacepic/image2.jpg', location: location, office: office, member: member, info: checkMin(member)},

        {image:'https://my-carousal-bucket.s3-us-west-1.amazonaws.com/more-info-img/morespacepic/image7.jpg', location: location, office: office, member: member, info: checkMin(member)},

        {image:'https://my-carousal-bucket.s3-us-west-1.amazonaws.com/more-info-img/morespacepic/image5.jpg', location: location, office: office, member: member, info: checkMin(member)},

        {image:'https://my-carousal-bucket.s3-us-west-1.amazonaws.com/more-info-img/morespacepic/image8.jpeg', location: location, office: office, member: member, info: checkMin(member)}
    ]
   }
  }

var listing = new Carousal(fakeData)
method.saveData(listing);
