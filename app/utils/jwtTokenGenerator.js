const jwt = require('jsonwebtoken');

function jwt_token_generator(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {expiresIn: "3d"})
    return token
}

module.exports = {
    jwt_token_generator
}