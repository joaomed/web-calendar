import { GoLocation } from 'react-icons/go'
import { AiOutlineCalendar } from 'react-icons/ai'
import { ButtonToEdit } from '../ButtonToEdit'
import { ButtonToDelete } from '../ButtonToDelete'

interface tarefaProps {
  idCurrent: string
  title: string
  description: string
  date: string
  hourStart: string
  hourEnd: string
  location: string
}

export function Tarefa({
  idCurrent,
  title,
  description,
  date,
  hourStart,
  hourEnd,
  location
}: tarefaProps) {
  return (
    <div className="flex border-b-4 pb-6 w-full justify-between items-start">
      <div className="flex gap-4">
        <div className="bg-blue-200 flex justify-center items-center w-20 h-20 rounded-full text-xl">
          {title.charAt(0)}
        </div>

        <div className="flex flex-col gap-1">
          <strong>{title}</strong>
          <div className="flex flex-col text-gray-700 text-sm">
            <p className="text-base">{description}</p>
            <div className="flex gap-1">
              <span className="flex gap-2">
                <AiOutlineCalendar /> {date}
              </span>
              |{' '}
              <span>
                De {hourStart} às {hourEnd}
              </span>
            </div>
            <span className="flex gap-2">
              <GoLocation />
              {location}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-1">
        <ButtonToDelete idTarefa={idCurrent} />
        <ButtonToEdit idTarefa={idCurrent} dateTarefa={date} />
      </div>
    </div>
  )
}
