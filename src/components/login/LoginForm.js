import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import Auth from '../../utils/auth';
import { LOGIN_GARDENER } from '../../utils/mutations';

const LoginForm = () => {

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [gardenerFormData, setGardenerFormData] = useState({ email: '', password: '' });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGardenerFormData({ ...gardenerFormData, [name]: value });
    };

    const [login] = useMutation(LOGIN_GARDENER)

    const onFinish = async (values) => {
        try {
            const { data } = await login({
                variables: { ...values }
            })
            Auth.login(data.login.token)
        } catch (err) {
            console.error(err);
        }

        setGardenerFormData({
            email: '',
            password: '',
        });
    };

    return (
        <div >

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
                    <div className='form-buttons'>
                        <Button

                            type="primary"
                            htmlType="submit">
                            Submit
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;





/* <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */




