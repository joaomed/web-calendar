import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

import Calendar from 'react-calendar'
import { Title } from '../components/Title'
import { Button } from '../components/Button'
import { Tarefa } from '../components/Tarefa'
import { ModalNovaTarefa } from '../components/ModalNovaTarefa'

import './calendar.css'
import './dialog.css'

export default function Home() {
  const [value, onChange] = useState(new Date())

  return (
    <div className="flex justify-center bg-gray-200">
      <div className="flex flex-col-reverse w-screen h-screen justify-center bg-#EEE gap-10 p-16 max-w-5xl">
        <div className="flex flex-col gap-6 bg-gray-100 p-6 rounded-xl shadow-md">
          <Title />
          <div className="flex flex-col gap-4">
            <Tarefa
              title={'Leslie Alexander'}
              description={'Reunião para resolver feature do front-end'}
              date={'15 Outubro, 2022 às 17:00'}
              duration={'50 minutos'}
              location={'Discord'}
            />
            <Tarefa
              title={'Leslie Alexander'}
              description={'Reunião para resolver feature do front-end'}
              date={'15 Outubro, 2022 às 17:00'}
              duration={'50 minutos'}
              location={'Discord'}
            />
          </div>
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
