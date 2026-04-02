const multer = require("multer")

const imglocation = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
   filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
}

})

const uploadImage = multer({storage: imglocation})

module.exports = uploadImage;