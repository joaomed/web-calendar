import { useContext, useEffect, useState } from 'react'
import { ApiService } from '../../services/ApiServices'
import { AxiosError } from 'axios'
import { TarefasContext } from '../../../contexts/TarefasContext'

export function useCriarTarefa() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hourStart, setHourStart] = useState('')
  const [hourEnd, setHourEnd] = useState('')
  const [location, setLocation] = useState('')
  const [message, setMessage] = useState('')

  const { dateSelect } = useContext(TarefasContext)
  const { updateMessage } = useContext(TarefasContext)

  useEffect(() => {
    setDate(dateSelect)
  }, [dateSelect])

  function cadastrarTarefa() {
    if (dateSelect != '') {
      ApiService.post(`/tarefas`, {
        title,
        description,
        date,
        hourStart,
        hourEnd,
        location
      })
        .then(() => {
          clearForm()
        })
        .catch((error: AxiosError) => {
          console.log(error)
        })
    }
    updateMessage('Tarefa Cadastrada!')
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
