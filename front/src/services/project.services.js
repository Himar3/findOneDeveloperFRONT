import api from './api'

const getAllProjects = async() => {
    const response = await api.get('projects')
    return response.data
}

const getOneProject = async(id) => {
  const response = await api.get(`projects/${id}`, { headers: { token:localStorage.getItem('token')}}) //PARA GET Y DELETE
  return response.data
}

const createProject = async(project) => {  //API.POST/PUT('RUTA', DATA, {OBJ})
  const response	= await api.post('projects', project, { headers: { token: localStorage.getItem('token')}})
  return response.data
}


export { getAllProjects, getOneProject, createProject }


