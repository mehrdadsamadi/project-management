const path = require('path');
const { create_upload_path } = require('../../utils/createUploadPath');

const upload_file = (req, res, next) => {
    try {
        if(!req.files || Object.keys(req.files).length === 0) 
            throw {status: 400, message: "لطفا یک تصویر انتخاب کنید"}
        
        const image = req.files.image
        
        const image_url = path.join(create_upload_path(), (Date.now() + path.extname(image.name)))
        req.body.image = image_url

        const upload_path = path.join(__dirname, "..", "..", "..", image_url)
        
        // TODO: fix this problem
        image.mv(upload_path, err => {
            if(err) throw {status: 500, message: "بارگذاری تصویر با مشکل مواجه شد"}
            next()
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {
    upload_file
}