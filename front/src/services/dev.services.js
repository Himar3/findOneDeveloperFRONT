import api from './api'

const getAllDevelopers = async() => {
  const response = await api.get('developers')
  return response.data
}

const getDeveloperById = async(id) => {
  const response = await api.get(`developers/${id}`, { headers: { token: localStorage.getItem('token')}})
  return response.data
}

const getOwnProfile = async() => {
  const response = await api.get('developers/profile', { headers: { token: localStorage.getItem('token')}})
  return response.data 
}

const editOwnProfile = async(user) => {
  const response = await api.put('developers/profile', user, { headers: { token: localStorage.getItem('token')}})
  return response.data
}

const addTechesToUser = async(knowledge) => {
  const response = await api.post('techs/profile', knowledge, { headers: { token: localStorage.getItem('token')}})
  return response.data
}

export { getAllDevelopers, getDeveloperById, getOwnProfile, editOwnProfile, addTechesToUser }