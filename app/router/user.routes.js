const {UserController} = require('../http/controllers/user.controller');
const { check_login } = require('../http/middlewares/checkLogin');

const router = require('express').Router();

router.get("/profile", check_login, UserController.get_profile)
router.put("/profile", check_login, UserController.edit_profile)

module.exports = {
    user_routes: router
}