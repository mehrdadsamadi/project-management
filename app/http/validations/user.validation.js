const {body} = require('express-validator');
const path = require('path');

function image_validator() {
    return [
        body("image").custom((image, {req}) => {
            if(!req.file) throw "لطفا تصویری را آپلود کنید"
            
            const type = path.extname(req.file.originalname)
            const exts = [".png", ".jpg", ".jpeg", ".gif", ".webp"]
            if(!exts.includes(type)) throw "قرمت عکس ارسالی باید یکی از موارد png, jpg, jpeg, gif, webp باشد"

            const max_size = 2 * 1024 * 1024
            if(req.file.size > max_size) throw "حجم فایل ارسالی نمیتواند بیشتر از 2 مگابایت باشد"

            return true
        })
    ]
}

module.exports = {
    image_validator
}