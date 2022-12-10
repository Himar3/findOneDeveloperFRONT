import api from './api'

const getAllDevelopers = async() => {
    const response = await api.get('developers')
    return response.data
  }

export default getAllDevelopers