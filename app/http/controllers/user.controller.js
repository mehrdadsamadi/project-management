const { UserModel } = require('../../models/user.model');

class UserController {
    get_profile(req, res, next) {
        try {
            res.status(200).json({
                success: true,
                status: 200,
                user: req.user
            })
        } catch (error) {
            next(error)
        }
    }

    async edit_profile(req, res, next) {
        try {
            Object.entries(req.body).forEach(([key, value]) => {
                if(!value) delete req.body[key]
            })
            
            const result = await UserModel.updateOne({_id: req.user._id}, {$set: req.body})

            if(result.modifiedCount <= 0) throw {status: 500, message: "به روز رسانی موفقیت آمیز نبود"}

            return res.status(200).json({
                success: true,
                status: 200,
                message: "پروفایل شما با موفقیت بروزرسانی شد"
            })

        } catch (error) {
            next(error)
        }
    }

    add_skills(req, res, next) {

    }

    edit_skills(req, res, next) {
        
    }

    accept_invite_to_team(req, res, next) {
        
    }

    reject_invite_to_team(req, res, next) {
        
    }
}

module.exports = {
    // برای اینکه هربار کنترلر را ایمپورت میکنیم شی جدید نسازد و بار اضافه به سرور وارد نشه همینجا نیو میکنیم
    UserController: new UserController()
}