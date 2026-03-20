const express = require("express");

const { createEMP, readAll, deleteEmp, readSingle, EmpUpdate } = require("../controller/employee");

const router = express.Router();

// CREATE
router.post("/", createEMP);


// READ SINGLE ✅
router.get("/:id", readSingle);

// READ ALL
router.get("/", readAll);



// update
router.put("/", EmpUpdate);



// DELETE
router.delete("/:id", deleteEmp);

module.exports = router;
