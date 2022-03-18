import React from 'react'
import SignupForm from '../../components/nav/SignupForm'
import { Modal, Button } from 'antd';
import { useState } from 'react';
import './home.css'

export default function SignupFormButton() {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Button className="sign-in-btn" type="primary" onClick={() => setVisible(true)}>
                Get Gardening!
            </Button>
            <Modal
                bodyStyle={{
                    backgroundColor: 'rgb(50, 143, 50)'
                }}
                className='signup-modal modal'
                title="Sign up to start your shelf!"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                < SignupForm />
            </Modal>
        </div>
    )
}
