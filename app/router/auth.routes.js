const { AuthController } = require('../http/controllers/auth.controller');
const { validation_handler } = require('../http/middlewares/validationHandler');
const { register_validator } = require('../http/validations/auth.validation');

const router = require('express').Router();

router.post("/register", register_validator(), validation_handler, AuthController.regiser)

module.exports = {
    auth_routes: router
}