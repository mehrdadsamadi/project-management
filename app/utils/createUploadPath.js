const path = require('path');
const fs = require('fs');

function create_upload_path() {
    const D = new Date()
    let Year = D.getFullYear() + ""
    let Month = D.getMonth() + ""
    let Day = D.getDate() + ""

    const upload_path = path.join(__dirname, "..", "..", "public", "uploads", Year, Month, Day)
    fs.mkdirSync(upload_path, {recursive: true})

    return path.join("public", "uploads", Year, Month, Day)
}

module.exports = {
    create_upload_path
}