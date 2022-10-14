import { useEffect, useState } from 'react'
import { ApiService } from '../../services/ApiServices'
import { AxiosError } from 'axios'

export function useCriarTarefa() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hourStart, setHourStart] = useState('')
  const [hourEnd, setHourEnd] = useState('')
  const [location, setLocation] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    console.log(date)
  }, [date])

  function cadastrarTarefa() {
    ApiService.post(`/${date}/`, {
      title,
      description,
      date,
      hourStart,
      hourEnd,
      location
    })
      .then(() => {
        clearForm()
        setMessage('Tarefa Cadastrada com sucesso!')
      })
      .catch((error: AxiosError) => {
        console.log(error)
      })
  }

  function clearForm() {
    setTitle('')
    setDescription('')
    setDate('')
    setHourStart('')
    setHourEnd('')
    setLocation('')
  }

  return {
    title,
    setTitle,
    description,
    setDescription,
    date,
    setDate,
    hourStart,
    setHourStart,
    hourEnd,
    setHourEnd,
    location,
    setLocation,
    message,
    cadastrarTarefa
  }
}
