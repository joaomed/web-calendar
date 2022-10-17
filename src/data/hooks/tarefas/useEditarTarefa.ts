import { useContext, useEffect, useState } from 'react'
import { ApiService } from '../../services/ApiServices'
import { AxiosError } from 'axios'
import { TarefasContext } from '../../../contexts/TarefasContext'

export function useEditarTarefa() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [hourStart, setHourStart] = useState('')
  const [hourEnd, setHourEnd] = useState('')
  const [location, setLocation] = useState('')

  const { updateMessage } = useContext(TarefasContext)

  function editarTarefa(idTarefa: string) {
    if (idTarefa != '') {
      ApiService.put(`/tarefas/${idTarefa}`, {
        title,
        description,
        hourStart,
        hourEnd,
        location
      })
        .then(() => {
          clearForm()
          updateMessage('Tarefa Editada!')
        })
        .catch((error: AxiosError) => {
          console.log(error)
        })
    }
  }

  function clearForm() {
    setTitle('')
    setDescription('')
    setHourStart('')
    setHourEnd('')
    setLocation('')
  }

  return {
    title,
    setTitle,
    description,
    setDescription,
    hourStart,
    setHourStart,
    hourEnd,
    setHourEnd,
    location,
    setLocation,
    editarTarefa
  }
}
