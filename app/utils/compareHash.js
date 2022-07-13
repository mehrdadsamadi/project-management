const bcrypt = require('bcrypt');

function compare_hash(str, hash) {
    return bcrypt.compareSync(str, hash)
}

module.exports = {
    compare_hash
}