import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Menu(){
    return(
        <header> 
            <nav>
                <Link to="/" className='linkLogo'>Logo</Link>
                    <ul className='nav-list'>
                        <li><Link to="/User">Usuario</Link></li>
                        <li><a href="#">link2</a></li>
                        <li><a href="#">link3</a></li>
                        <li><a href="#">link3</a></li>
                        <li><a href="#">link3</a></li>
                    </ul>
            </nav>
            <Outlet/>
    </header>
    )
}