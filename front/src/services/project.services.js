import api from './api'

const getAllProjects = async() => {
    const response = await api.get('projects')
    return response.data
}

const getOneProject = async(id) => {
  const response = await api.get(`projects/${id}`)
  return response.data
}

export { getAllProjects, getOneProject }