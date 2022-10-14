import { AiOutlineCalendar } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

interface tarefaProps {
  title: string
  description: string
  date: string
  duration: string
  location: string
}

export function Tarefa({
  title,
  description,
  date,
  duration,
  location
}: tarefaProps) {
  return (
    <div className="flex border-b-4 pb-6 gap-4">
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
            | <span>{duration}</span>
          </div>
          <span className="flex gap-2">
            <GoLocation />
            {location}
          </span>
        </div>
      </div>
    </div>
  )
}
