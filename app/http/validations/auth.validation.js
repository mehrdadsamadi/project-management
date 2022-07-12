const {body} = require('express-validator');
const { UserModel } = require('../../models/user.model');

function register_validator() {
    return [
        body("username").not().isEmpty().withMessage("نام کاربری نمی تواند خالی باشد").custom(async username => {
            const user = await UserModel.findOne({username})
            if(user) throw 'نام کاربری قبلا استفاده شده است'
            return true
        }),
        body("email").isEmail().withMessage("ایمیل معتبر وارد کنید").custom(async email => {
            const user = await UserModel.findOne({email})
            if(user) throw 'ایمیل قبلا استفاده شده است'
            return true
        }),
        body("phone_number").isMobilePhone("fa-IR").withMessage("شماره همراه معتبر وارد کنید").custom(async phone_number => {
            const user = await UserModel.findOne({phone_number})
            if(user) throw 'شماره تلفن قبلا استفاده شده است'
            return true
        }),
        body("password").isLength({min: 6, max: 16}).withMessage("کلمه عبور باید حداقل 6 و حداکثر 16 کاراکتر باشد").custom((value, {req}) => {
            if(!value) throw "کلمه عبور نمیتواند خالی باشد"
            if(value !== req.body.confirm_password) throw "کلمه عبور و تکرار کلمه عبور یکسان نمیباشد"
            return true
        }),
    ]
}

module.exports = {
    register_validator
}