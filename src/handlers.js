const fetch = require('isomorphic-fetch')

const httpGet = cmd => fetch(cmd.url).then(r => r.json())

module.exports = {
  httpGet,
}
