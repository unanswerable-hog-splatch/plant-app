import React from 'react'
import LoginForm from '../../components/user-form/LoginForm'
import { Modal, Button } from 'antd';
import { useState } from 'react';
import './home.css'

export default function LoginFormButton() {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button className="login-btn" type="primary" onClick={() => setVisible(true)}>
                Login
            </Button>
            <Modal
                bodyStyle={{
                    backgroundColor: 'rgb(98, 218, 98)',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
                title="Get back to being shelfish!"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={600}
            >
                < LoginForm />
            </Modal>
        </div>
    )
}
