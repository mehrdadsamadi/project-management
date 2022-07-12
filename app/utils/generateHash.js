const bcrypt = require('bcrypt');

function gen_hash(str) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(str,salt)
}

module.exports = {
    gen_hash
}