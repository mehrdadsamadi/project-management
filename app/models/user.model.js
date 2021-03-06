const {Schema, model, Types} = require('mongoose');

const user_schema = new Schema({
    first_name: {type: String},
    last_name: {type: String},
    username: {type: String, required: true, uniqe: true},
    password: {type: String, required: true},
    email: {type: String, required: true, uniqe: true},
    phone_number: {type: String, required: true, uniqe: true},
    token: {type: String, default: ""},
    profile_image: {type: String, default: "/dafaults/user-placeholder.png"},
    roles: {type: [String], default: ["USER"]},
    teams: {type: [Types.ObjectId], default: []},
    skills: {type: [String], default: []},
},{timestamps: true})

const UserModel = model("user", user_schema)

module.exports = {
    UserModel
}