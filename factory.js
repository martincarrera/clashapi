module.exports = trae => {
  const API_URL = 'http://www.clashapi.xyz/api'

  const modelsNames = [
    'arenas',
    'cards',
    'chests',
    'players',
    'leagues',
  ]

  const api = trae.create()

  api.after(res => res.data)

  const assignModelGetter = (models, model) =>
    Object.assign(models, {
      [model]: (id = '') => api.get(`${API_URL}/${model}/${id}`)
    })

  return modelsNames.reduce(assignModelGetter, {})
}
