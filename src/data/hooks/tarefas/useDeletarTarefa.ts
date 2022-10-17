import { useContext, useEffect, useState } from 'react'
import { ApiService } from '../../services/ApiServices'
import { AxiosError } from 'axios'
import { TarefasContext } from '../../../contexts/TarefasContext'

export function useDeletarTarefa() {
  const [idTarefaDelete, setIdTarefaDelete] = useState('')
  const { updateMessage } = useContext(TarefasContext)

  function updateTarefaDelete(idTarefa: string) {
    setIdTarefaDelete(idTarefa)
  }

  useEffect(() => {
    if (idTarefaDelete != '') {
      ApiService.delete(`/tarefas/${idTarefaDelete}/`)
        .then(() => {
          updateMessage('Tarefa Excluída!')
        })
        .catch((error: AxiosError) => {
          console.log(error)
        })
    }
  }, [idTarefaDelete])

  return {
    idTarefaDelete,
    updateTarefaDelete
  }
}
