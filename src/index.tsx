import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import reportWebVitals from './reportWebVitals'
// import { Dashboard } from './Routes/Dashboard/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Main } from './Routes/Main/Main'
import { ErrorPage } from './Routes/ErrorPage/ErrorPage'
import { Dashboard } from './Routes/Dashboard/Dashboard'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />
  },
  {
    path: 'Dashboard',
    element: <Dashboard />
  },
  {
    path: 'Logs',
    element: <Dashboard />
    // implement Logs page
  }
])
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
// Main color: #ffffff (white)
// Accent color: #00b0ff (bright blue)
// Background color: #121212 (dark gray)
// font Lato
// Main color: #ffffff (white)
// Accent color: #e53935 (dark red)
// Background color: #000000 (black)
