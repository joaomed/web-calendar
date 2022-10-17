import { useContext, useState } from 'react'

import { TarefasContext } from '../../contexts/TarefasContext'
import { Tarefa } from '../Tarefa'

export function ListTarefas() {
  const { tarefas } = useContext(TarefasContext)

  const [valueSearch, setValueSearch] = useState('')

  const filteredTarefas = valueSearch
    ? tarefas.filter(tarefa => {
        return tarefa.title.toLowerCase().includes(valueSearch.toLowerCase())
      })
    : tarefas

  return (
    <div className="flex flex-col gap-6">
      <input
        className="w-full text-xl px-3 py-1"
        type="search"
        placeholder="Procurar"
        onChange={e => setValueSearch(e.target.value)}
        value={valueSearch}
      />

      <div className="flex flex-col gap-4">
        {filteredTarefas
          .sort(function (a, b) {
            return a.date < b.date
              ? -1
              : a.date > b.date
              ? 1
              : a.hourStart < b.hourStart
              ? -1
              : 0
          })
          .map(tarefa => {
            return (
              <div key={tarefa.id}>
                <Tarefa
                  key={tarefa.id}
                  idCurrent={tarefa.id}
                  title={tarefa.title}
                  description={tarefa.description}
                  date={tarefa.date}
                  hourStart={tarefa.hourStart}
                  hourEnd={tarefa.hourEnd}
                  location={tarefa.location}
                />
              </div>
            )
          })}

        {filteredTarefas.length === 0 && <p>Nenhuma tarefa encontrada!</p>}
      </div>
    </div>
  )
}
