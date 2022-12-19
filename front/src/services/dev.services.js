import api from './api'

const getAllDevelopers = async() => {
  const response = await api.get('developers')
  return response.data
}

const getDeveloperById = async(id) => {
  const response = await api.get(`developers/${id}`, { headers: { token: localStorage.getItem('token')}})
  return response.data
}

const editOwnProfile = async(user) => {
  console.log(user)
  const response = await api.put('developers/profile', user, { headers: { token: localStorage.getItem('token')}})
  console.log(response.data);
  return response.data
}

const addTechesToUser = async(knowledge) => {
  console.log(knowledge);
  const response = await api.post('techs/profile', {teches: knowledge.tech}, { headers: { token: localStorage.getItem('token')}})
  console.log(response.data)
  return response.data
}

export { getAllDevelopers, getDeveloperById, editOwnProfile, addTechesToUser }