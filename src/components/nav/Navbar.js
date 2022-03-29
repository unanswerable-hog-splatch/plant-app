import 'antd/dist/antd.css';
import './navbar.css';
import Auth from '../../utils/auth';
import { Menu, Dropdown } from 'antd';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

import useHook from '../../hooks/useHook'

export default function NavBar() {

    const { selectIcon } = useHook();
    const { data } = useQuery(QUERY_ME);
    const firstLetter = data?.me.name.split('').shift()

    const menu = (
        <Menu>
            <Menu.Item
                className="dropdown-item"
                key="0">
                <a href="/">Home</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
                className="dropdown-item"
                key="1">
                <a href="/profile">Profile</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
                className="dropdown-item"
                key="2"
                onClick={Auth.logout}>
                Logout
            </Menu.Item>
        </Menu>
    )

    
    return (
        <div className="main-nav">

            {Auth.isLoggedIn() ?
                <>
                    <h1><img src={selectIcon('cactus')} alt='Cactus' />Shelf Care</h1>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link profile-dropdown" onClick={e => e.preventDefault()}>
                                <div className="dropdown-letter">
                                    {firstLetter}
                                </div>

                            </a>
                        </Dropdown>
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
