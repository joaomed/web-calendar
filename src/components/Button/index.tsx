import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

interface ButtonProps {
  children: ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <Dialog.Trigger className="bg-blue-700 text-white hover:bg-blue-500 duration-300 text-base flex justify-center font-bold rounded-2xl p-4 gap-2">
      {children}
    </Dialog.Trigger>
  )
}
