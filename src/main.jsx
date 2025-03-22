import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// Import Pages
import Inicio from './components/pages/Inicio.jsx'
import Filmes from './components/pages/Inicio.jsx'
import Procurar from './components/pages/Inicio.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path='/' element = {<Inicio/>}/>
        <Route path='filmes/:id' element = {<Filmes/>}/>
        <Route path='procurar' element = {<Procurar/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)
