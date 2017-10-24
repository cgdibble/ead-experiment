const { testFn, args } = require('effects-as-data/test')
const cmds = require('./cmds')
const { getPeople } = require('./functions')
const testGetPeople = testFn(getPeople)

test(
  'getPeople() should return list of names',
  testGetPeople(() => {
    const url = 'https://swapi.co/api/people'
    const apiResults = { results: [{ name: 'Luke Skywalker' }] }
    return args()
      .yieldCmd(cmds.httpGet(url))
      .yieldReturns(apiResults)
      .returns(['Luke Skywalker'])
  })
)
