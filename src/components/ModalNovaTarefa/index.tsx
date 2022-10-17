import * as Dialog from '@radix-ui/react-dialog'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { MdOutlineCancel } from 'react-icons/md'

import { useCriarTarefa } from '../../data/hooks/tarefas/useCriarTarefa'

interface ModalNovaTarefaProps {
  dateCurrent: Date
}

export function ModalNovaTarefa({ dateCurrent }: ModalNovaTarefaProps) {
  const {
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
    message,
    cadastrarTarefa
  } = useCriarTarefa()

  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  /*   const { tarefas } = useListarTarefas();*/

  return (
    <form
      action=""
      method="get"
      className="flex flex-col justify-center mt-14 gap-7 overflow-hidden"
    >
      {/* Date */}
      <strong className="text-2xl">
        {dateCurrent.getDate()} de {monthNames[dateCurrent.getMonth()]},{' '}
        {dateCurrent.getFullYear()}
      </strong>

      {/* Títuto */}
      <div className="flex flex-col gap-3">
        <label htmlFor="title" className="font-bold text-base"></label>
        <input
          id="title"
          placeholder="Adicionar título"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="rounded-lg bg-gray-300 px-6 py-5 h-20 text-lg text-black placeholder:text-gray-700"
          required
        />
      </div>

      {/* Detalhes */}
      <div className="flex flex-col gap-3">
        <label htmlFor="description" className="font-bold text-base"></label>
        <input
          id="description"
          placeholder="Adicionar detalhes"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="rounded-lg bg-gray-300 px-6 py-5 h-20 text-lg text-black placeholder:text-gray-700"
          required
        />
      </div>

      {/* Hora de comeco e fim */}

      <div className="flex gap-2 items-center">
        <label htmlFor="hourStart" className="font-bold text-lg">
          De
        </label>
        <input
          id="hourStart"
          placeholder="De"
          type="time"
          value={hourStart}
          onChange={e => setHourStart(e.target.value)}
          className="rounded-lg bg-gray-300 px-6 py-5 h-20 text-lg text-black placeholder:text-gray-700"
          required
        />
        <label htmlFor="hourEnd" className="font-bold text-lg">
          Até
        </label>
        <input
          id="hourEnd"
          type="time"
          value={hourEnd}
          onChange={e => setHourEnd(e.target.value)}
          className="rounded-lg bg-gray-300 px-6 py-5 h-20 text-lg text-black placeholder:text-gray-700"
          required
        />
      </div>

      {/* Localização */}
      <div className="flex flex-col gap-3">
        <label htmlFor="location" className="font-bold text-base"></label>
        <input
          id="location"
          placeholder="Adicionar Local"
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="rounded-lg bg-gray-300 px-6 py-5 h-20 text-lg text-black placeholder:text-gray-700"
          required
        />
      </div>

      <footer className="flex gap-6 mt-6 justify-end">
        <Dialog.Close
          type="button"
          className="bg-red-500 hover:bg-red-300 duration-300 text-base flex gap-2 justify-center font-bold rounded-2xl p-4"
        >
          <MdOutlineCancel size={24} />
          Cancelar
        </Dialog.Close>

        <button
          type="submit"
          onClick={cadastrarTarefa}
          className="bg-blue-500 hover:bg-blue-700 duration-300 text-base flex gap-2 justify-center font-bold rounded-2xl p-4"
        >
          <AiOutlineCheckCircle size={24} />
          Cadastrar Tarefa
        </button>

        {message}
      </footer>
    </form>
  )
}
