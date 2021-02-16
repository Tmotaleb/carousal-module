const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const {Carousal} = require('../database/index.js');

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'carousal-module'
var db;

//api GET request
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

//Established a mongo connection to insert user data to 'registryEntries' collection
app.post('/api/register', async(req, res) => {

  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async(err, client) => {
    db = client.db(dbName);
    await db.collection('registryEntries').insertOne({
      email: req.body.email,
      password: req.body.password
    })
    .then((result) => {
      res.send(result)
      console.log(result, 'Registered user successfully!')
    })
    .catch((err) => {
      console.log(err)
    })
    await client.close();
  })
})

//Established a mongo connection to insert recipient email data to 'recipientEmailEntries' collection
app.post('/api/share', async(req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async(err, client) => {
    db = client.db(dbName);
    await db.collection('recipientEmailEntries').insertOne({
      recipientEmail: req.body.email,
    })
    .then((result) => {
      res.send(result)
      console.log(result, 'Recipient email saved successfully!')
    })
    .catch((err) => {
      console.log(err)
    })
    await client.close();
  })
})

module.exports = app;