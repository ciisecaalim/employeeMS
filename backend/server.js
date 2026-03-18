 const express = require("express");
 const mongoose = require("mongoose");
 const cors = require("cors");

 const emprouter = require("./router/employee")

 const app = express();

 app.use(cors());
 app.use(express.json());

 mongoose.connect("mongodb://localhost:27017/employeeMS").then(() => {
    console.log("succsessfully")
 })

 app.use("/employee", emprouter);

 app.listen(5000, () => {
    console.log("connected")
 })