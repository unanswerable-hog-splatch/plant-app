import 'antd/dist/antd.css';
import './navbar.css';
import MainNav from './DropDown'
import cacti from '../../img/cactus-1.png'

import Auth from '../../utils/auth';


export default function NavBar() {
    return (
        <div className="main-nav">

            {Auth.isLoggedIn() ?
                <>
                    <a href="/">
                        <h1><img className='home-icon' src={cacti} alt='Cactus' />Shelf Care
                        </h1>
                    </a>
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
