const mongoose = require("mongoose");

const schema = new mongoose.Schema({
   id : {type: Number, required: true},
   name : {type: String, required: true},
   phone : {type: Number, required: true},
   salary : {type: Number, required: true},
   Image : {type: String, required: true}
})

module.exports = mongoose.model("employee", schema)