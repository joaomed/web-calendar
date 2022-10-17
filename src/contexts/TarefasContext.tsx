import { createContext, ReactNode, useEffect, useState } from 'react'
import { useDeletarTarefa } from '../data/hooks/tarefas/useDeletarTarefa'

interface Tarefa {
  id: string
  title: string
  description: string
  date: string
  hourStart: string
  hourEnd: string
  location: string
  createAt: Date
}

interface TarefasContextData {
  tarefas: Tarefa[]
  dateSelect: string
  updateDateSelect: (id: string) => void
  updateMessage: (messageCurrent: string) => void
  message: string
}

interface TarefasProviderProps {
  children: ReactNode
}

export const TarefasContext = createContext({} as TarefasContextData)

export function TarefasProvider({ children }: TarefasProviderProps) {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])
  const [dateSelect, setDateSelect] = useState('')
  const [message, setMessage] = useState('')

  const { idTarefaDelete } = useDeletarTarefa()

  useEffect(() => {
    if (dateSelect != '') {
      fetch(`http://localhost:3333/tarefas`)
        .then(response => response.json())
        .then(data => {
          setTarefas(data)
        })
    }
  }, [message, dateSelect, idTarefaDelete])

  function updateDateSelect(id: string) {
    setDateSelect(id)
  }

  function updateMessage(messageCurrent: string) {
    setMessage(messageCurrent)
  }

  return (
    <TarefasContext.Provider
      value={{
        tarefas,
        dateSelect,
        updateDateSelect,
        updateMessage,
        message
      }}
    >
      {children}
    </TarefasContext.Provider>
  )
}
