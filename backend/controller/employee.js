 const empmodel = require("../model/employee");

 const createEmp = async(req, res) => {

    
    const newdata = empmodel(req.body)
    const savedata = newdata.save();

    if(savedata){
        res.send(savedata)
        return;
    }




}


module.exports = {createEmp};