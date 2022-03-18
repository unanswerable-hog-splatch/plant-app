import React from 'react'
import LoginForm from '../components/nav/LoginForm'
import { Modal, Button } from 'antd';
import { useState } from 'react';

export default function LoginFormButton() {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button className="login-btn" type="primary" onClick={() => setVisible(true)}>
                Login
            </Button>
            <Modal
                title="Get back to being shelfish!"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                < LoginForm />
            </Modal>
        </div>
    )
}
