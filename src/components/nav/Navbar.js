import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Modal, Button } from 'antd';
import SignupForm from './SignupForm'

export default function NavBar() {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <>
                <Button type="primary" onClick={() => setVisible(true)}>
                    Open Modal of 1000px width
                </Button>
                <Modal
                    title="Modal 1000px width"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={1000}
                >
                    < SignupForm />
                </Modal>
            </>
        </div>
    )
}
