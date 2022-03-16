// import { useMutation } from '@apollo/client';
// import React, { useState } from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';
// import Auth from '../../utils/auth';
// import { LOGIN_GARDENER } from '../../utils/mutations';
// // export default function SignupForm() {

// const LoginForm = () => {

//     const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };

//     const [gardenerFormData, setGardenerFormData] = useState({ email: '', password: '' });


//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setGardenerFormData({ ...gardenerFormData, [name]: value });
//     };

//     const [login] = useMutation(LOGIN_GARDENER )

//     const onFinish = async (values) => {
//         // event.preventDefault();
//         console.log(values)
//         // gardenerFormData = event
//         // console.log(gardenerFormData)

//         try {
//             const { data } = await login({
//                 variables: { ...values }
//             })
//             console.log(data)
//             Auth.login(data.addGardener.token)
//         } catch (err) {
//             console.error(err);
//         }

//         setGardenerFormData({
//             email: '',
//             password: '',
//         });
//     };

//     return (
//         <Form
//             name="basic"
//             labelCol={{
//                 span: 8,
//             }}
//             wrapperCol={{
//                 span: 16,
//             }}
//             initialValues={{
//                 remember: true,
//             }}
//             // onSubmit={handleFormSubmit}
//             onFinish={onFinish}
//             onFinishFailed={onFinishFailed}
//             autoComplete="off"
//         >

//             <Form.Item
//                 label="Email"
//                 name="email"
//                 onChange={handleInputChange}
//                 value={gardenerFormData.email}
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input your email!',
//                     },
//                 ]}
//             >
//                 <Input />
//             </Form.Item>

//             <Form.Item
//                 label="Password"
//                 name="password"
//                 onChange={handleInputChange}
//                 value={gardenerFormData.password}
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input your password!',
//                     },
//                 ]}
//             >
//                 <Input.Password />
//             </Form.Item>

//             <Form.Item
//                 wrapperCol={{
//                     offset: 8,
//                     span: 16,
//                 }}
//             >
//                 <Button
//                     // disabled={!(gardenerFormData.name && gardenerFormData.email && gardenerFormData.password)}
//                     type="primary"
//                     htmlType="submit">
//                     Submit
//                 </Button>
//             </Form.Item>
//         </Form>
//     );
// };

// export default LoginForm;





{/* <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}




