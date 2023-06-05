import axios from 'axios'

export const api = axios.create({
  baseURL:
    'https://foodexplorer-backend-vcq3.onrender.com' /* or 'http://localhost:${BACKEND_PORT}' */,
})
