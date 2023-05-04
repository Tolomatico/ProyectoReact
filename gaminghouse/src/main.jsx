import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { initFirebase } from './firebase/config'

import App from './App'
initFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
)
