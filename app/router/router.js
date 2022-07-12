const { auth_routes } = require('./auth.routes');
const { project_routes } = require('./project.routes');
const { team_routes } = require('./team.routes');
const { user_routes } = require('./user.routes');

const router = require('express').Router();

router.use("/auth", auth_routes)
router.use("/user", user_routes)
router.use("/team", team_routes)
router.use("/project", project_routes)

module.exports = {
    all_routes: router
}