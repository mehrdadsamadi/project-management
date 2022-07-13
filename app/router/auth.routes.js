const { AuthController } = require('../http/controllers/auth.controller');
const { validation_handler } = require('../http/middlewares/validationHandler');
const { register_validator, login_validator } = require('../http/validations/auth.validation');

const router = require('express').Router();

router.post("/register", register_validator(), validation_handler, AuthController.regiser)
router.post("/login", login_validator(), validation_handler, AuthController.login)

module.exports = {
    auth_routes: router
}