import axios from 'axios'

const api = axios.create({
    baseURL: /*process.env.API*/'http://localhost:2222/api'
})

export default api