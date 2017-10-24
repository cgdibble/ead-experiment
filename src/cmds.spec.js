const equal = require(`assert`).deepEqual
const { httpGet } = require('./cmds')

describe('cmds.js', () => {
  describe('httpGet', () => {
    it('should return httpGet command', () => {
      const url = 'http://something.com'
      const expected = {
        type: 'httpGet',
        url,
      }
      const result = httpGet(url)
      equal(result, expected)
    })
  })
})
