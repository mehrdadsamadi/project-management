const {Schema, model, Types} = require('mongoose');

const team_schema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    users: {type: [Types.ObjectId], default: []},
    owner: {type: Types.ObjectId, required: true},
},{timestamps: true})

const TeamModel = model("user", team_schema)

module.exports = {
    TeamModel
}