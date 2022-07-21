const can = (...roles) => {
    return (req, res, next) => {
        try {
            const user_roles = req.user.roles;
            
            let can_next = true;

            roles = roles.map(role => role.toUpperCase());

            roles.every(role => {
                if(!user_roles.includes(role)) {
                    can_next = false;
                    return false
                }
                return true
            });

            if(!can_next) throw {status: 401, message: "شما دسترسی به این بخش را ندارید"};

            next()

        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    can
}