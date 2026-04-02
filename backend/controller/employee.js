const empcontroller = require("../model/employee");
const mongoose = require("mongoose");

const buildEmployeeQuery = (paramId) => {
  if (paramId === undefined || paramId === null) {
    return null;
  }

  const idAsString = String(paramId).trim();
  if (!idAsString || idAsString === "null" || idAsString === "undefined") {
    return null;
  }

  if (/^\d+$/.test(idAsString)) {
    return { id: Number(idAsString) };
  }

  if (mongoose.Types.ObjectId.isValid(idAsString)) {
    return { _id: idAsString };
  }

  return null;
};

// ✅ READ SINGLE
const readSingle = async (req, res) => {
  const query = buildEmployeeQuery(req.params.id);

  if (!query) {
    return res.status(400).json({ message: "Invalid employee id" });
  }

  try {
    const reads = await empcontroller.findOne(query);

    if (!reads) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    res.status(200).json({
      message: "Read employee successfully!",
      data: reads
    });

  } catch (error) {
    res.status(500).json({
      message: "Error reading employee",
      error: error.message
    });
  }
};


//update

const EmpUpdate = async (req, res) => {
  try {
    const query = buildEmployeeQuery(req.params.id);

    if (!query) {
      return res.status(400).json({ message: "Invalid employee id" });
    }

    let updateData = {
      ...req.body
    };

    if (req.file) {
      updateData.Image = req.file.filename;
    }

    const updated = await empcontroller.findOneAndUpdate(
      query,
      updateData,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    res.status(200).json({
      message: "Updated successfully",
      data: updated
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

// ✅ CREATE
const createEMP = async (req, res) => {
  try {
    const newdata = new empcontroller({
      ...req.body,
        Image: req.file ? req.file.filename : ""
    });
    const savedata = await newdata.save();

    res.status(200).json({
      message: "Employee created successfully!",
      data: savedata
    });

  } catch (error) {
    res.status(500).json({
      message: "Error occurred",
      error: error.message
    });
  }
};

// ✅ READ ALL
const readAll = async (req, res) => {
  try {
    const findAll = await empcontroller.find();

    res.status(200).json({
      message: "All employees",
      data: findAll
    });

  } catch (error) {
    res.status(500).json({
      message: "Error reading all employees",
      error: error.message
    });
  }
};

// ✅ DELETE
const deleteEmp = async (req, res) => {
  const query = buildEmployeeQuery(req.params.id);

  if (!query) {
    return res.status(400).json({ message: "Invalid employee id" });
  }

  try {
    const dl = await empcontroller.findOneAndDelete(query);

    if (!dl) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    res.status(200).json({
      message: "Deleted successfully",
      data: dl
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting employee",
      error: error.message
    });
  }
};

module.exports = { createEMP, readAll, deleteEmp, readSingle, EmpUpdate };
