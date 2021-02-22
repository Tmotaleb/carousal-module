const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);
const {Carousal, User, Share} = require('../database/index.js');

// Sample test to check if Jest is working
it('Testing to see if Jest works', ()=> {
  expect(1).toBe(1)
})

describe('Test GET requests to /api/carousal endpoint', () => {
  app.get('/api/carousal', async(req, res)=> {
    res.json({message:'pass!'})
  })

  // Sends Get Request to /api/carousal enpoint
  it('Gets the test endpoint', async done => {
    const res = await request.get('/api/carousal')
    done()
  })

  // Test Get request HTTP status
  it('Status code is 201', async done => {
    const response = await request.get('/api/carousal')
    expect(response.status).toBe(201)
    done()
  })

  // Testing the response body
  it('Test data type of the response', async done => {
    const response = await request.get('/api/carousal')
    expect(typeof(response.body)).toBe('object')
    expect(typeof(response.body.descriptionTxt)).toBe('string')
    done()
  })

})

describe('Test POST request to the /api/register endpoint', ()=> {

  //Save user email and password to the database
  it('Should save user email and password to database', async done => {
    const res = await request.post('/api/register')
    .send({
      email:"testing@gmail.com",
      password:'testing123'
    })

     //Check to see if that user was saved to the User collection
    const user = await User.findOne({email:'testing@gmail.com'})

    //Confirm that the user has an email
    expect(user.email).toBeTruthy()
    expect(res.body.email).toBeTruthy()
    done()
  })

  // Clean up the User collection after this test
  afterEach(async () => {
    await User.deleteMany()
  })
})
