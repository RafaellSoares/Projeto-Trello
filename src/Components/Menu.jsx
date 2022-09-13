import React from 'react';
import Perfil from './Perfil';
import { Outlet, Link } from "react-router-dom";

export default function Menu(){
    return(
        <header> 
            <nav>
                <Perfil/>
                    <ul className='nav-list'>
                        <li><Link to="/User">Inicio</Link></li>
                    </ul>
            </nav>
            <Outlet/>
    </header>
    )
}