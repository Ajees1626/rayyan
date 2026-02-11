import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

function AppWithLoader() {
  useEffect(() => {
    const loader = document.getElementById('app-loader')
    if (loader) {
      loader.classList.add('hidden')
      const removeAfter = () => {
        loader.remove()
      }
      loader.addEventListener('transitionend', removeAfter, { once: true })
      return () => loader.removeEventListener('transitionend', removeAfter)
    }
  }, [])

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWithLoader />
  </StrictMode>,
)
