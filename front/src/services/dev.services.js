import api from './api'

const getAllDevelopers = async() => {
  const response = await api.get('developers')
  return response.data
}


// const getDeveloperById = async() => {
//   const response = await api.get('developers/:id')
//   return response.data
// }

export default getAllDevelopers