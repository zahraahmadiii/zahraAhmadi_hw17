import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ModalPortal from './components/ModalPortal'
import './index.css'
import ContextProvider from './components/Contexts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider> 
  </React.StrictMode>,
)
