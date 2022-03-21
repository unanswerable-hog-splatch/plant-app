import React from 'react';
import 'antd/dist/antd.css';
import './navbar.css'
import { Menu, Dropdown } from 'antd';
import Auth from '../../utils/auth'
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

export default function MainNav() {

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

    <>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link profile-dropdown" onClick={e => e.preventDefault()}>
          <div className="dropdown-letter">
            {firstLetter}
          </div>

        </a>
      </Dropdown>
    </>

  )

}


