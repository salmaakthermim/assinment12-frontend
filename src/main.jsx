import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'

import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
   </AuthProvider>
  </StrictMode>,
)
