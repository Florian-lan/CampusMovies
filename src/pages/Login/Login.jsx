import React from "react";
import './style.scss'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import ConfirmBtn from "../../components/ConfirmBtn/ConfirmBtn";




const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const handleLogin = () => {
        console.log("login")
    }
    return (
        <>
            <div className="login-content-wrapper">
            <div className="img-wrapper">
           
                <img src="/image/login.jpg" alt="login-img" />
            </div>
                <div className="login-wrapper">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的用户名！',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的密码！',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请输入密码"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            {/* <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button> */}
                            <ConfirmBtn
                                text="Log in"
                                loading={false}
                                className="login-form-button"
                                onClick={handleLogin}
                                type="primary"
                                htmlType="submit"
                            >

                            </ConfirmBtn>
                            <div className="register">
                                <span className="register-or">
                                    Or
                                </span>
                                <a href="" className="register-link">register now!</a>
                            </div>

                        </Form.Item>
                    </Form>
                </div>

                <div className="register wrapper">

                </div>
            </div>
        </>


    )

}

export default Login