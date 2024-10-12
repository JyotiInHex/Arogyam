import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FromProvider } from './context/formContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FromProvider>
      <App />
    </FromProvider>
  </StrictMode>,
)
