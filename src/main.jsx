import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Routes.jsx'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <ThemeProvider><RouterProvider router={router} /></ThemeProvider>
  </React.StrictMode>,
)
