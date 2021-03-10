const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/carousal-module', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=> {console.log('Mongodb is running!')});

const CarousalSchema = new Schema({
  address: String,
  photos: Array,
  descriptionTxt: String,
  moreSpacesInfo: Array
});

const UserSchema = new Schema({
  email: {type: String, require: true, unique: true},
  password: String
})

const ShareSchema = new Schema({
  email: {type: String, require: true, unique: true}
})

const Carousal = mongoose.model('Carousal', CarousalSchema);
const User = mongoose.model('User', UserSchema);
const Share = mongoose.model('Share', ShareSchema)

module.exports = {Carousal, User, Share}

