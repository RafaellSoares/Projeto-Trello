import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import api from '../service/api';
import { Link } from "react-router-dom";

export default function Lista() {
    
    let params = useParams();

    const [List, setLists] = useState([])

    const getUsers = async () => {
        const listUsers = await api
            .get(`/boards/${params.IDBOARD}?members=all&lists=open&cards=all&key=d98fc56e6a11ac9d28342ec168732743&token=d0b4cc8c08ce75b80fc3047e844c85f9d54d5b9b40ef0202876a379995708e35`)
            .then(response => response.data)
            .catch(err => console.log(err))
        console.log(listUsers)
        setLists([listUsers])
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div className="container">
            <div className='text-center'>
            <h2 className="titulo">{List[0]?.name}</h2>
            </div>


            
            <div className="row justify-content-between Cards">


                {List[0]?.lists.map(listas => {
                    return (
                        <div className="col-4 Board">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-secondary text-center">Nome: {listas.name}</li>

                                {List[0]?.cards.map(Card =>{if(listas.id == Card.idList){
                                    return(<li className="list-group-item">{Card.name}</li>)
                                }})}  

                            </ul>
                        </div>
                    )
                })}

            </div>
            <div className='btnVoltar'>
            <Link to="/" className="voltar"><button className='btn btn-primary float-end'>Voltar</button></Link>
            </div>
        </div>
    )
} 