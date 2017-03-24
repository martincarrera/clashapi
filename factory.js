const { API_URL, modelsNames } = require('./constants')

module.exports = trae => {
  const api = trae.create({bodyType: 'json'})

  api.after(res => res.data)

  const assignModelGetter = (models, model) =>
    Object.assign(models, {
      [model]: (id = '') => api.get(`${API_URL}/${model}/${id}`)
    })

  return modelsNames.reduce(assignModelGetter, {})
}
