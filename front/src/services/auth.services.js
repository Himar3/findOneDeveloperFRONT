import api from './api'


const login = async(user) => {
    const response = await api.post('auth/login', user)
    localStorage.setItem('email', response.data.email)
    localStorage.setItem('token', response.data.token)
}

const signup = async(user) => {
    const response = await api.post('auth/signup', user)    
    console.log(response)
    localStorage.setItem('email', response.data.email)
    localStorage.setItem('token', response.data.token)
}

export { login, signup }