const jwt = require('jsonwebtoken');

function verify_jwt_token(token) {
    const result = jwt.verify(token, process.env.JWT_SECRET_KEY)
    if(!result?.username) throw {status: 401, message: "مجددا وارد حساب کاربری خود شوید"}
    return result
}

module.exports = {
    verify_jwt_token
}