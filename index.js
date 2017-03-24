const trae = require('trae')

const BASE_URL = 'http://www.clashapi.xyz/api'

const modelsNames = [
  'arenas',
  'cards',
  'chests',
  'players',
  'leagues'
]

trae.after(res => res.data)

const getModelFactory = model => (id = '') => trae.create({baseUrl: `${BASE_URL}/${model}/`}).get(id)

const models = modelsNames
  .reduce((m, model) => Object.assign({}, m, {
    [model]: getModelFactory(model)
  }), {})

module.exports = models
