const express = require("express");

const { createEMP, readAll, deleteEmp, readSingle, EmpUpdate } = require("../controller/employee");

const uploadImage = require("../middleware/upload")

const router = express.Router();

// CREATE
router.post("/", uploadImage.single("Image"), createEMP);


// READ SINGLE ✅
router.get("/:id", readSingle);

// READ ALL
router.get("/", readAll);



// update
router.put("/:id", uploadImage.single("Image"), EmpUpdate);



// DELETE
router.delete("/:id", deleteEmp);

module.exports = router;
