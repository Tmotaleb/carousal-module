const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carousal-module', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=> {console.log('Mongodb is running!')});


const CarousalSchema = new mongoose.Schema({
  address: String,
  photos: Array
});

const Carousal = mongoose.model('Carousal', CarousalSchema);

module.exports = {db, Carousal}

