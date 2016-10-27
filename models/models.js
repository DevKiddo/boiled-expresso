let mongoose = require('mongoose');

// Create a Schema
let robotSchema = mongoose.Schema({
  name: String,
  abilities: [String],
  isEvil: Boolean
});


let models =  {
  Robot : mongoose.model("robot", robotSchema)
}

module.exports = models;