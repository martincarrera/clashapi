const fetchMock = require('fetch-mock')

const { API_URL } = require('../constants')
const clashapi = require('../index')
const { chests } = require('./seeds')

afterEach(fetchMock.restore)

describe('chests', () => {
  it('gets the whole list of chests when called with no params', () => {
    const url = `${API_URL}/chests/`

    fetchMock.get(url, { body: chests })

    return clashapi.chests()
      .then(res => {
        expect(fetchMock.called(url)).toBe(true)
        expect(res).toEqual(chests)
      })
  })

  it('gets a single chest when called with the chest id', () => {
    const url = `${API_URL}/chests/${chests[0].idName}`

    fetchMock.get(url, { body: chests[0] })

    return clashapi.chests(chests[0].idName)
      .then(res => {
        expect(fetchMock.called(url)).toBe(true)
        expect(res).toEqual(chests[0])
      })
  })
})

