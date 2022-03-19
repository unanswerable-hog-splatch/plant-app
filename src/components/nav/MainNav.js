import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Auth from '../../utils/auth'

export default function MainNav () {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={Auth.logout} key="3">Logout</Menu.Item>
    </Menu>
  )

    return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Click me <DownOutlined />
      </a>
    </Dropdown>
  )

}


