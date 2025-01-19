import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <div className=''>
        <RouterProvider router={router} />
      </div>
   </AuthProvider>
  </StrictMode>,
)
