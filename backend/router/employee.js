 const express = require("express");

 const {createEmp} = require("../controller/employee")
 
 const router = express.Router();

 router.post("/", createEmp);

 module.exports = router;


