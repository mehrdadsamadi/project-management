const { ProjectModel } = require("../../models/project.model")
class ProjectController {
    async create_project(req, res, next) {
        try {
            const {title, text, image, tags} = req.body
            console.log(tags);
            const result = await ProjectModel.create({title, text, owner: req.user._id, image, tags})
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
            const projects = await ProjectModel.find({owner: req.user._id})

            return res.status(200).json({
                status: 200,
                success: true,
                projects
            })
        } catch (error) {
            next(error)
        }
    }

    async get_project_by_id(req, res, next) {
        try {
            const owner = req.user._id
            const project_id = req.params.id

            const project = await ProjectModel.findOne({owner, _id: project_id})
            if(!project) throw {status: 404, message: "پروژه ای یافت نشد"}

            res.status(200).json({
                status: 200,
                success: true,
                project
            })
        } catch (error) {
            next(error)
        }
    }

    async remove_project(req, res, next) {
        try {
            const owner = req.user._id
            const project_id = req.params.id
            
            const remove_result = await ProjectModel.findOneAndDelete({owner, _id: project_id})
            if(!remove_result) throw {status: 404, message: "پروژه ای یافت نشد"}

            res.status(200).json({
                status: 200,
                success: true,
                message: "پروژه با موفقیت حذف شد"
            })

        } catch (error) {
            next(error)
        }
    }

    async get_all_projects_of_team(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    }

    async get_projects_of_user(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    }

    async update_project(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    }

}

module.exports = {
    // برای اینکه هربار کنترلر را ایمپورت میکنیم شی جدید نسازد و بار اضافه به سرور وارد نشه همینجا نیو میکنیم
    ProjectController: new ProjectController()
}