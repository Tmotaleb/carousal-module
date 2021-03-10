const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const app = express();
const {Carousal, User, Share} = require('../database/index.js');

app.use(compression());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname + '/../client/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Api GET request
app.get('/api/carousal', (req, res) => {
  Carousal.findOne({})
    .then((results) => {
      if(!results) {
        throw new Error;
      }
      res.status(201).send(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('unable to save');
    })
})

//Post user email and password to /api/register
app.post('/api/register', async (req, res) => {
  const {email, password} = req.body;
  const user = new User({email, password})
  await user.save()
    .then((result) => {
      res.send(result)
      console.log(result, 'Registered User Successfully!')
    })
    .catch((err) => {
      console.log(err)
    })
})

//Post recipient email to /api/share
app.post('/api/share', async(req, res) => {
  const {email} = req.body;
  const recipient = new Share({email})
  await recipient.save()
    .then((result) => {
      res.send(result)
      console.log(result, 'Recipient email saved successfully!')
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = app;