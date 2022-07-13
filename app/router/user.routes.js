const {UserController} = require('../http/controllers/user.controller');
const { check_login } = require('../http/middlewares/checkLogin');

const router = require('express').Router();

router.get("/profile", check_login, UserController.get_profile)

module.exports = {
    user_routes: router
}