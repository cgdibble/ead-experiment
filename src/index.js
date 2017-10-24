const { buildFunctions } = require('effects-as-data')
const handlers = require('./handlers')
const functions = require('./functions')

const config = {
  onCommandComplete: telemetry => {
    console.log('Telmetry (from onCommandComplete):', telemetry)
  },
}

const fns = buildFunctions(config, handlers, functions)
module.exports = fns
