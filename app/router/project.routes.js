const fileUpload = require('express-fileupload');

const { ProjectController } = require('../http/controllers/project.controller');
const { can } = require('../http/middlewares/can');
const { check_login } = require('../http/middlewares/checkLogin');
const { validation_handler } = require('../http/middlewares/validationHandler');
const { create_project_validator } = require('../http/validations/project.validation');
const { upload_file } = require('../http/middlewares/expressFileUpload');


const router = require('express').Router();

router.post("/create", fileUpload(), check_login, create_project_validator(), validation_handler, upload_file, ProjectController.create_project)
router.get("/all", check_login, can("admin"), ProjectController.get_all_projects)

module.exports = {
    project_routes: router
}