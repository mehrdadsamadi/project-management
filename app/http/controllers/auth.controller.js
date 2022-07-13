const { UserModel } = require("../../models/user.model")
const { compare_hash } = require("../../utils/compareHash")
const { gen_hash } = require("../../utils/generateHash")
const { jwt_token_generator } = require("../../utils/jwtTokenGenerator")

class AuthController {
    async regiser(req, res, next) {
        try {
            const {username, email, phone_number, password} = req.body
    
            const hash_password = gen_hash(password)
    
            const user = await UserModel.create({username, email, phone_number, password: hash_password})
            return res.status(200).json({
                status: 200,
                success: true,
                message: "ثبت نام شما با موفقیت انجام شد",
                user
            })
            
        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const {username, password} = req.body
    
            const user = await UserModel.findOne({username})
            if(!user) throw {status: 401, message: "نام کاربری یا کلمه عبور صحیح نمیباشد"}
    
            const compare_result = compare_hash(password, user.password)
            if(!compare_result) throw {status: 401, message: "نام کاربری یا کلمه عبور صحیح نمیباشد"}
    
            const token = jwt_token_generator({username})

            user.token = token
            await user.save()

            return res.status(200).json({
                status: 200,
                success: true,
                message: "شما با موفقیت وارد حساب کاربری خود شدید",
                token
            })
            
        } catch (error) {
            next(error)
        }
    }

    reset_password() {

    }
}

module.exports = {
    // برای اینکه هربار کنترلر را ایمپورت میکنیم شی جدید نسازد و بار اضافه به سرور وارد نشه همینجا نیو میکنیم
    AuthController: new AuthController()
}