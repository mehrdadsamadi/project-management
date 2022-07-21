const {param} = require('express-validator');

function objectId_validator() {
    return [
        param("id").isMongoId().withMessage("شناسه ارسالی توسط شما معتبر نمی باشد")        
    ]
}

module.exports = {
    objectId_validator
}