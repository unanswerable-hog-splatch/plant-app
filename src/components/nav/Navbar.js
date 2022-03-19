import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import './navbar.css';
import MainNav from './DropDown'

import Auth from '../../utils/auth';


export default function NavBar() {
    const [visible, setVisible] = useState(false);
    return (
        <div className="main-nav">
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
