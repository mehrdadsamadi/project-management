const { body } = require("express-validator");

function create_project_validator() {
    return [
        body("title").notEmpty().withMessage("عنوان پروژه نمیتواند خالی باشد"),
        body("text").isLength({min: 20}).withMessage("توضیحات پروژه نمیتواند کمتر از 20 کاراکتر باشد")
    ]
}

module.exports = {
    create_project_validator
}