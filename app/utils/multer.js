const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const D = new Date()
        let Year = D.getFullYear() + ""
        let Month = D.getMonth() + ""
        let Day = D.getDate() + ""

        const upload_path = path.join(__dirname, "..", "..", "public", "uploads", Year, Month, Day)
        fs.mkdirSync(upload_path, {recursive: true})

        cb(null, path.join("public", "uploads", Year, Month, Day))
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