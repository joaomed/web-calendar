import { useState, useEffect, useContext } from 'react'

import { TarefasContext } from '../../contexts/TarefasContext'

export function MessageAction() {
  const [hiddenClass, setHiddenClass] = useState('opacity-0')
  const { message } = useContext(TarefasContext)

  useEffect(() => {
    setHiddenClass('opacity-100')
    setTimeout(() => {
      setHiddenClass('opacity-0')
    }, 5000)
  }, [message])

  return (
    <div
      className={`bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 fixed top-0 w-screen opacity ${hiddenClass} transition-opacity`}
      role="alert"
    >
      <p className="font-bold">{message}</p>
      <p className="text-sm">Sua ação foi realizada com sucesso!.</p>
    </div>
  )
}
