import api from './api'

const getAllProjects = async() => {
    const response = await api.get('projects')
    return response.data
}

const getOneProject = async(id) => {
  const response = await api.get(`projects/${id}`, { headers: { token:localStorage.getItem('token')}})
  return response.data
}

const createProject = async(project) => {
  const response	= await api.post('projects', project, { headers: { token: localStorage.getItem('token')}})
  return response.data
}

const addTechesToProject = async(knowledge) => {
  const response = await api.post('techs/project', knowledge, { headers: { token: localStorage.getItem('token')}})
  return response.data
}

const getProjectsByUser = async(id) => {
  const response = await api.get(`projects/developer/${id}`, { headers: { token: localStorage.getItem('token')}})
  return response.data
}

const getOwnProjects = async() => {
  const response = await api.get('projects/profile', { headers: { token: localStorage.getItem('token')}})
  return response.data
}


export { getAllProjects, getOneProject, createProject, addTechesToProject, getProjectsByUser, getOwnProjects }


