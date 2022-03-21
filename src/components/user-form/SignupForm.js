import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Form, Input, Button, Modal, Checkbox } from 'antd';
import Auth from '../../utils/auth';
import { ADD_GARDENER } from '../../utils/mutations';
import LoginForm from './LoginForm';

// export default function SignupForm() {

const SignupForm = () => {
    const [visible, setVisible] = useState(false);

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [gardenerFormData, setGardenerFormData] = useState({ name: '', email: '', password: '' });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGardenerFormData({ ...gardenerFormData, [name]: value });
    };

    const [addGardener] = useMutation(ADD_GARDENER)

    const onFinish = async (values) => {
        try {
            const { data } = await addGardener({
                variables: { ...values }
            })
            console.log(data)
            Auth.login(data.addGardener.token)
        } catch (err) {
            console.error(err);
        }

        setGardenerFormData({
            name: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    onChange={handleInputChange}
                    value={gardenerFormData.name}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    onChange={handleInputChange}
                    value={gardenerFormData.email}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    onChange={handleInputChange}
                    value={gardenerFormData.password}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button
                        className="nav-buttons"
                        type="primary"
                        htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default SignupForm;
// };








