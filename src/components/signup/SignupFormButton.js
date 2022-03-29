import SignupForm from './SignupForm'
import { Modal, Button } from 'antd';
import { useState } from 'react';


export default function SignupFormButton() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button  type="primary" onClick={() => setVisible(true)}>
                Sign Up
            </Button>
            <Modal
                className='signup-modal modal form'
                title="Sign up to start your shelf!"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={600}
            >
                < SignupForm />
            </Modal>
        </>
    )
}
