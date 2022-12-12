import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Signin } from './components/Signin/Signin'
import { User } from './components/User/User'
import { Products } from './components/Products/Products'
import { Signup } from './components/Signup/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: 'signin',
      element: <Signin />,
    },
    {
      path: 'user',
      element: <User />,
    },
    {
      path: 'products',
      element: <Products />,
    },
    {
      path: 'signup',
      element: <Signup />,
    },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
