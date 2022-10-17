import * as Dialog from '@radix-ui/react-dialog'

import { useContext, useEffect, useState } from 'react'

import Calendar from 'react-calendar'
import { Title } from '../components/Title'
import { Button } from '../components/Button'
import { ModalNovaTarefa } from '../components/ModalNovaTarefa'

import './calendar.css'
import './dialog.css'

import { TarefasContext } from '../contexts/TarefasContext'
import { MessageAction } from '../components/MessageAction'
import { ListTarefas } from '../components/ListTarefas'
export default function Home() {
  const [value, onChange] = useState(new Date())

  const { updateDateSelect } = useContext(TarefasContext)

  useEffect(() => {
    updateDateSelect(
      `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`
    )
  }, [value])

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200">
      <MessageAction />

      <div className="flex flex-col-reverse w-screen min-h-screen justify-end bg-#EEE gap-10 p-16 max-w-5xl">
        <div className="flex flex-col gap-6 bg-gray-100 p-6 rounded-xl shadow-md">
          <Title />

          <ListTarefas />
        </div>

        <Dialog.Root>
          <div className="flex flex-col gap-6">
            <Calendar onChange={onChange} value={value} locale={'pt-BR'} />

            <Button>Adicionar Tarefa</Button>
          </div>

          <Dialog.Portal>
            <Dialog.Overlay className="styledOverlay">
              <Dialog.Content className="styledContent">
                <Dialog.Title className="styledTitle">
                  Adicionar uma tarefa
                </Dialog.Title>
                <ModalNovaTarefa dateCurrent={value} />
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  )
}
