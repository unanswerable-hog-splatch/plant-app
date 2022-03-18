import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import './navbar.css';
import { Modal, Button } from 'antd';
import SignupForm from './SignupForm'

import Auth from '../../utils/auth';


export default function NavBar() {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <>
                <Button className="nav-buttons" type="primary" onClick={() => setVisible(true)}>
                    Get Gardening!
                </Button>
                <Modal
                    title="Sign up to start your shelf!"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={1000}
                >
                    < SignupForm />
                </Modal>
                <Button onClick={Auth.logout}>Logout</Button>
            </>
        </div>
    )
}
