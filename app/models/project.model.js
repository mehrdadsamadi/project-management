const {Schema, model, Types} = require('mongoose');

const project_schema = new Schema({
    title: {type: String, required: true},
    text: {type: String},
    image: {type: String, default: "/dafaults/project-placeholder.png"},
    tags: {type: Array, default: []},
    owner: {type: Types.ObjectId, required: true},
    team: {type: Types.ObjectId},
    Private: {type: Boolean, default: true}
},{timestamps: true})

const ProjectModel = model("user", project_schema)

module.exports = {
    ProjectModel
}