const {UserController} = require('../http/controllers/user.controller');
const { check_login } = require('../http/middlewares/checkLogin');
const { validation_handler } = require('../http/middlewares/validationHandler');
const { image_validator } = require('../http/validations/user.validation');
const { multer_upload } = require('../utils/multer');

const router = require('express').Router();

router.get("/profile", check_login, UserController.get_profile)
router.put("/profile", check_login, UserController.edit_profile)
router.post("/profile-image", check_login, multer_upload.single("image"), image_validator(), validation_handler, UserController.profile_image)

module.exports = {
    user_routes: router
}