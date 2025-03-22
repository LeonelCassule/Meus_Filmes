import { Outlet } from 'react-router-dom'

import './App.css'
import Navbar from './components/pages/layout/Navbar'

function App() {
  

  return (   
      <div>
        <Navbar/>
        <h1>Meus Filmes</h1>
        <Outlet/>
      </div>
  )
}

export default App
