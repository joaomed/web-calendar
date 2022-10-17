import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './global.css'
import { TarefasProvider } from './contexts/TarefasContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TarefasProvider>
      <Home />
    </TarefasProvider>
  </React.StrictMode>
)
