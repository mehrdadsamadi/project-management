const fileUpload = require('express-fileupload');

const { ProjectController } = require('../http/controllers/project.controller');
const { can } = require('../http/middlewares/can');
const { check_login } = require('../http/middlewares/checkLogin');
const { validation_handler } = require('../http/middlewares/validationHandler');
const { create_project_validator } = require('../http/validations/project.validation');
const { upload_file } = require('../http/middlewares/expressFileUpload');
const { objectId_validator } = require('../http/validations/global.validation');


const router = require('express').Router();

router.post("/create", fileUpload(), check_login, create_project_validator(), validation_handler, upload_file, ProjectController.create_project)
router.get("/list", check_login, ProjectController.get_all_projects)
router.get("/:id", check_login, objectId_validator(), validation_handler, ProjectController.get_project_by_id)
router.delete("/remove/:id", check_login, objectId_validator(), validation_handler, ProjectController.remove_project)

module.exports = {
    project_routes: router
}