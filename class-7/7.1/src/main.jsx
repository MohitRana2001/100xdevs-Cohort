/* eslint-disable */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AllRoutes from './AllRoutes.jsx'
import './index.css'
import AllRoutesLazy from './AllRoutesLazy.jsx'
import ContextApi from './ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AllRoutes /> */}
    {/* <AllRoutesLazy /> */}
    <ContextApi />
  </StrictMode>,
)
