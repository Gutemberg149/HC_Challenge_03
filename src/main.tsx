import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './global.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './routes/Error/index.tsx';
import Home from './routes/Home/index.tsx';
import FAQ from './routes/FAQ/index.tsx'
import Integrante from './routes/Integrantes/index.tsx';
import Pacientes from './routes/Pacientes/index.tsx';
import PacienteInfo from './routes/PacienteInfo/index.tsx';


const router = createBrowserRouter([{
   path:"/", element: <App/>, errorElement: <Error/>, children:[
    {path:"/", element: <Home/>},
    {path:"/faq", element: <FAQ/>},
    {path:"/integrante", element: <Integrante/>},
    {path:"/pacientes", element: <Pacientes/>},
    {path:"/pacienteinfo/:id", element: <PacienteInfo/>}
   ]
}
]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
