const config = require('config');
config()
const mongodbURL = process.env.DB_MONGO

module.exports = mongodbURL