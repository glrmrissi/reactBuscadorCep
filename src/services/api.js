import axios from 'axios';

// API https://viacep.com.br/ws/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;