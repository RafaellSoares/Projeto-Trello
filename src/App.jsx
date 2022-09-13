import { useState, useEffect } from 'react'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Formulario from './Components/Formulario'
import Rodape from './Components/Rodape'
import api from './service/api'
import User from './Components/User'
import './App.css'
import Menu from './Components/Menu';
import Lista from './Components/Listas';

function App() {


  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Menu/>}>
        
        <Route path="User" element={<User/>}/>

        <Route path="Lista" element={<Lista/>}>
          <Route path=":IDBOARD" element={<Lista/>} />
        </Route>

      </Route>

    </Routes>
  </BrowserRouter>



  )
}

export default App
