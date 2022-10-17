import { useDeletarTarefa } from '../../data/hooks/tarefas/useDeletarTarefa'
import { AiFillDelete } from 'react-icons/ai'

interface ButtonToDeleteProps {
  idTarefa: string
}

export function ButtonToDelete({ idTarefa }: ButtonToDeleteProps) {
  const { updateTarefaDelete } = useDeletarTarefa()

  return (
    <button
      className="flex justify-center items-center  p-2 text-black w-10 h-10 bg-blue-100 rounded-full hover:bg-blue-500 hover:text-white duration-300"
      onClick={() => {
        updateTarefaDelete(idTarefa)
      }}
    >
      <AiFillDelete />
    </button>
  )
}
