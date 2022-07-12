const {Schema, model, Types} = require('mongoose');

const user_schema = new Schema({
    firt_name: {type: String},
    last_name: {type: String},
    username: {type: String, required: true, uniqe: true},
    password: {type: String, required: true},
    email: {type: String, required: true, uniqe: true},
    phone_number: {type: String, required: true, uniqe: true},
    roles: {type: [String], default: ["USER"]},
    teams: {type: [Types.ObjectId], default: []},
    skills: {type: [String], default: []},
},{timestamps: true})

const UserModel = model("user", user_schema)

module.exports = {
    UserModel
}