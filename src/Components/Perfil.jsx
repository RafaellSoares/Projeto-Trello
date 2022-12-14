import { useState, useEffect } from 'react'
import api from '../service/api';

export default function Perfil() {

    const [Users, setUsers] = useState([])

    const getUsers = async () => {
      const listUsers = await api
                                  .get("/members/me?boards=all&organizations=all&key=d98fc56e6a11ac9d28342ec168732743&token=d0b4cc8c08ce75b80fc3047e844c85f9d54d5b9b40ef0202876a379995708e35")
                                  .then(response => response.data)
                                  .catch(err => console.log(err))
  
      console.log(listUsers) 
      setUsers([listUsers])                           
    }
    
    useEffect(() => {
      getUsers()
    }, [])


    return (

            <div className='perfil'>
            <img src={Users[0]?.avatarUrl + "/30.png"} />
            <h4>{Users[0]?.fullName}</h4>
            </div>
            
    )
}