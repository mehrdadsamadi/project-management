const Application = require('./app/server');
const {DB_URL, PORT} = require('./app/configs');

new Application(PORT, DB_URL)