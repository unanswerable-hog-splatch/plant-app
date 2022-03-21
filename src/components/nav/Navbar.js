import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import './navbar.css';
import MainNav from './DropDown'
import cacti from '../../img/cactus-1.png'

import Auth from '../../utils/auth';


export default function NavBar() {
    const [visible, setVisible] = useState(false);
    return (
        <div className="main-nav">
            <h1><img src={cacti} alt='Cactus'/>Shelf Care</h1>
            {Auth.isLoggedIn() ?
                <>
                    < MainNav />
                </>
                : (
                    <>
                    {/* WHAT TO PUT IN NAV BAR WHEN LOGGED OUT */}
                    </>
                )
            }
        </div>
    )
}
