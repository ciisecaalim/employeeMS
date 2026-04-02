 const mongoose = require("mongoose");
 const express = require("express");
 const cors = require("cors")
 const emproter = require("./router/employee");
const e = require("express");
 
 const app = express()

 app.use(cors())
 app.use(express.json())

mongoose.connect("mongodb://localhost:27017/employeeEMP").then(() => {
  console.log("database connected successfully!")
})

app.use("/api/employee", emproter)
 
app.use("/images", express.static("images"))

app.listen(5000, () => {
   console.log("server is running port 5000")
})
