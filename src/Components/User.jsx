import { useState, useEffect } from 'react'
import api from '../service/api';
import { Outlet, Link } from "react-router-dom";

export default function User() {

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
        <div className="container">
            <div className='text-center'>
            <h2 className="titulo">Quadros</h2>
            </div>
            
            <div className="row justify-content-between">
                {Users[0]?.boards.map(quadro => {
                    return (
                            <div className="col-4 Board">
                                <ul className="list-group">
                                    <li className="list-group-item text-center">Nome: {quadro.name}</li>
                                    <li className="list-group-item"><Link to={`/Lista/${quadro.id}`} key={quadro.id}> id: {quadro.id}</Link></li>
                                </ul>
                            </div>
                            )
                })}

            </div>

                <Outlet/>
        </div>
    )
}