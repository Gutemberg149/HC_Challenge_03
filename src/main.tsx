import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './global.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Error from './routes/Error/index.tsx';
import Home from './routes/Home/index.tsx';


const router = createBrowserRouter([{
   path:"/", element: <App/>, errorElement: <Error/>, children:[
    {path:"/", element: <Home/>}
   ]
}
]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
