const { UserModel } = require("../../models/user.model")
const { verify_jwt_token } = require("../../utils/verifyJwtToken")

const check_login = async (req, res, next) => {
    try {
        const login_error = {status: 401, message: "لطفا وارد حساب کاربری خود شوید"}
        
        const authorization = req?.headers?.authorization
        if(!authorization) throw login_error
    
        const token = authorization.split(" ")?.[1]
        if(!token) throw login_error
    
        const verify_token_result = verify_jwt_token(token)
        const {username} = verify_token_result
    
        const user = await UserModel.findOne({username}, {password: 0, __v: 0})
        if(!user) throw login_error
    
        req.user = user
        return next()
        
    } catch (error) {
        next(error)
    }
}

module.exports = {
    check_login
}