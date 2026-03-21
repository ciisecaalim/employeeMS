const empcontroller = require("../model/employee");

// ✅ READ SINGLE
const readSingle = async (req, res) => {
  try {
    const reads = await empcontroller.findById(req.params.id);

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

const EmpUpdate = async(req, res) => {
    const updated = await empcontroller.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
        
    )

    if(!updated){
        res.status(404).json({
            message: "not found! "
            
        })

        res.status(200).json({
            message: "successfully",
            data: updated
        })

        res.status(500).json({
            message: "error",
            error : error.message
        })
    }
}



// ✅ CREATE
const createEMP = async (req, res) => {
  try {
    const newdata = new empcontroller(req.body);
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
  const employeeId = Number(req.params.id);

  if (Number.isNaN(employeeId)) {
    return res.status(400).json({ message: "Invalid employee id" });
  }

  try {
    const dl = await empcontroller.findOneAndDelete({ id: employeeId });

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
