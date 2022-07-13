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

    edit_profile() {

    }

    add_skills() {

    }

    edit_skills() {
        
    }

    accept_invite_to_team() {
        
    }

    reject_invite_to_team() {
        
    }
}

module.exports = {
    // برای اینکه هربار کنترلر را ایمپورت میکنیم شی جدید نسازد و بار اضافه به سرور وارد نشه همینجا نیو میکنیم
    UserController: new UserController()
}