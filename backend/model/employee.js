 const mongoose = require("mongoose");

 const empschema = new mongoose.Schema({
    id : {type: Number, require:  true},
    name : {type: String, require:  true},
    phone : {type: Number, require:  true},
    salary : {type: Number, require:  true}
 })


 module.exports = mongoose.model("employee", empschema)