const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const {Carousal} = require('../database/index.js')

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'carousal-module'
var db;

app.get('/api/carousal', (req, res) => {
  Carousal.findOne({})
    .then((results) => {
      res.status(201).send(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('unable to save');
    })
})

//Established a mongo connection to insert data to another collection
app.post('/api/register', (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    db = client.db(dbName);
    db.collection('registryEntries').insertOne({
      email: req.body.email,
      password: req.body.password
    })
    .then((result) => {
      res.send(result)
      console.log(result, 'sent data successfully')
    })
    .catch((err) => {
      console.log(err)
    })
    client.close();
  })
})


module.exports = app;