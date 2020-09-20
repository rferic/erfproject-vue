const envLocal = require('dotenv').config().parsed

const baseURL = typeof envLocal !== typeof undefined && typeof envLocal.baseURL !== typeof undefined
  ? envLocal.baseURL
  : 'http://localhost/'

const env = {
  baseURL
}

module.exports = env
