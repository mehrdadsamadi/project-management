const multer = require('multer');
// const fs = require('fs');
const path = require('path');
const { create_upload_path } = require('./createUploadPath');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        // const upload_path = path.join(__dirname, "..", "..", create_upload_path())
        // fs.mkdirSync(upload_path, {recursive: true})

        cb(null, create_upload_path())
    },
    filename: (req, file, cb) => {
        const file_type = path.extname(file.originalname)
        cb(null, Date.now() + file_type)
    }
})

const multer_upload = multer({storage})
module.exports = {
    multer_upload
}