const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const {Carousal} = require('../database/index.js')

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/api/carousal', (req, res) => {
  Carousal.findOne({})
    .then((results) => {
      console.log(results)
      res.status(201).send(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('unable to save');
    })
})

module.exports = app;