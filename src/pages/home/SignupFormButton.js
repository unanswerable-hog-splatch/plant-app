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
                    backgroundColor: 'rgb(228, 175, 77)',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
                className='signup-modal modal'
                title="Sign up to start your shelf!"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={800}
            >
                < SignupForm />
            </Modal>
        </div>
    )
}
