import * as Popover from '@radix-ui/react-popover'
import {
  AiFillEdit,
  AiOutlineClose,
  AiOutlineCheckCircle
} from 'react-icons/ai'

import { useEditarTarefa } from '../../data/hooks/tarefas/useEditarTarefa'

interface ButtonToEditProps {
  idTarefa: string
  dateTarefa: string
}

export function ButtonToEdit({ idTarefa, dateTarefa }: ButtonToEditProps) {
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
    editarTarefa
  } = useEditarTarefa()

  return (
    <Popover.Root>
      <Popover.Trigger className="flex justify-center items-center  p-2 text-black w-10 h-10 bg-blue-100 rounded-full hover:bg-blue-500 hover:text-white duration-300 ">
        <AiFillEdit />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content sideOffset={5}>
          <div className="flex flex-col gap-6 bg-gray-100 p-6 rounded-xl shadow-md">
            <header className="flex justify-between items-center">
              <strong className="text-xl">Editar Tarefa</strong>

              <div className="flex gap-1">
                <Popover.Close
                  type="button"
                  className="hover:text-white hover:bg-red-300 duration-500 text-base flex gap-2 justify-center font-bold rounded-full p-4"
                >
                  <AiOutlineClose />
                </Popover.Close>

                <button
                  type="submit"
                  onClick={() => {
                    editarTarefa(idTarefa)
                  }}
                  className="hover:text-white hover:bg-blue-500 duration-500 text-base flex gap-2 justify-center font-bold rounded-full p-4"
                >
                  <AiOutlineCheckCircle />
                </button>
              </div>
            </header>

            <strong className="text-lg">{dateTarefa}</strong>

            {/* Títuto */}
            <div className="flex flex-col gap-3">
              <label htmlFor="title"></label>
              <input
                id="title"
                placeholder="Adicionar título"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="rounded-lg bg-#EEE border px-6 py-5 h-10 text-base text-black placeholder:text-gray-700"
                required
              />
            </div>

            {/* Detalhes */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="description"
                className="font-bold text-base"
              ></label>
              <input
                id="description"
                placeholder="Adicionar detalhes"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="rounded-lg bg-#EEE border px-6 py-5 h-10 text-base text-black placeholder:text-gray-700"
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
                className="rounded-lg bg-#EEE border px-6 py-5 h-10 text-base text-black placeholder:text-gray-700"
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
                className="rounded-lg bg-#EEE border px-6 py-5 h-10 text-base text-black placeholder:text-gray-700"
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
                className="rounded-lg bg-#EEE border px-6 py-5 h-10 text-base text-black placeholder:text-gray-700"
                required
              />
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
