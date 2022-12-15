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
  const response = await api.put('profile', {
    name: user.name,
    email: user.email,
    image: user.image,
    about: user.about,
    tech: user.tech
  }, { headers: { token: localStorage.getItem('token')}})
  return response.data
}

export { getAllDevelopers, getDeveloperById, editOwnProfile }