import api from './api'

const getAllTechs = async() => {
    const response = await api.get('techs')
    return response.data
  }

  export default getAllTechs