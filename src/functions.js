const cmds = require('./cmds')

const getPeople = function*() {
  const url = 'https://swapi.co/api/people'
  const { results } = yield cmds.httpGet(url)
  return results.map(p => p.name)
}

module.exports = { getPeople }
