const { ProjectModel } = require("../../models/project.model")
class ProjectController {
    async create_project(req, res, next) {
        try {
            const {title, text, image} = req.body
            
            const result = await ProjectModel.create({title, text, owner: req.user._id, image})
            if(!result) throw {status: 500, message: "ایجاد پروژه با خطا مواجه شد"}

            return res.status(201).json({
                status: 201,
                success: true,
                message: "پروژه با موفقیت ایجاد شد"
            })

        } catch (error) {
            next(error)
        }
    }

    async get_all_projects(req, res, next) {
        try {
            const projects = await ProjectModel.find({})

            return res.status(200).json({
                status: 200,
                success: true,
                projects
            })
        } catch (error) {
            next(error)
        }
    }

    get_project_by_id() {
        
    }

    get_all_projects_of_team() {
        
    }

    get_projects_of_user() {
        
    }

    update_project() {
        
    }

    remove_project() {
        
    }
}

module.exports = {
    // برای اینکه هربار کنترلر را ایمپورت میکنیم شی جدید نسازد و بار اضافه به سرور وارد نشه همینجا نیو میکنیم
    ProjectController: new ProjectController()
}