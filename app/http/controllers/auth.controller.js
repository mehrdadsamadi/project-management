const { UserModel } = require("../../models/user.model")
const { gen_hash } = require("../../utils/generateHash")

class AuthController {
    async regiser(req, res, next) {
        const {username, email, phone_number, password} = req.body

        const hash_password = gen_hash(password)

        const user = await UserModel.create({username, email, phone_number, password: hash_password})
        return res.json(user)
    }

    login() {

    }

    reset_password() {

    }
}

module.exports = {
    // برای اینکه هربار کنترلر را ایمپورت میکنیم شی جدید نسازد و بار اضافه به سرور وارد نشه همینجا نیو میکنیم
    AuthController: new AuthController()
}