import axios from 'axios'

export const ApiService = axios.create({
  baseURL: 'http://localhost:3333/tarefas',
  headers: {
    'Content-Type': 'application/json'
  }
})
