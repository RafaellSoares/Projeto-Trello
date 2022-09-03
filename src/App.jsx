import { useState, useEffect } from 'react'
import Menu from './Components/Menu'
import Formulario from './Components/Formluario'
import Rodape from './Components/Rodape'
import api from './service/api'
import User from './Components/User'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [Users, setUsers] = useState([])


  const getUsers = async () => {
    const listUsers = await api
                                .get()
                                .then(response => response.data)
                                .catch(err => console.log(err))

    console.log(listUsers) 
    setUsers([listUsers])                           
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className='app'>
      <Menu/>
      
     <User usuario={Users[0]}></User>
    </div>

  )
}

export default App
