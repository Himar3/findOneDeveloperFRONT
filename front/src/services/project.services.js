import api from './api'

const getAllProjects = async() => {
    const response = await api.get('projects')
    return response.data
  }

export default getAllProjects