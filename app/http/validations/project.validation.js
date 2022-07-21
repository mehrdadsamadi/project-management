const { body } = require("express-validator");

function create_project_validator() {
    return [
        body("title").notEmpty().withMessage("عنوان پروژه نمیتواند خالی باشد"),
        body("text").isLength({min: 0, max: 50}).withMessage("توضیحات پروژه نمیتواند بیشتر از 50 کاراکتر باشد"),
        body("tags").isArray({min: 0, max: 10}).withMessage("هشتگ ها نمیتواند بیشتر از 10 عدد باشد"),
    ]
}

module.exports = {
    create_project_validator
}