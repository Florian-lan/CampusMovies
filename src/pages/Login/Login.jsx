import React, {useState} from "react";
import './style.scss'
import { Form, Input, Button, Checkbox, Space, Cascader} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import ConfirmBtn from "../../components/ConfirmBtn/ConfirmBtn";

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';




const Login = () => {

  

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const handleLogin = () => {
        console.log("login")

    };
  
    return (
        <>
            <div className="login-content-wrapper">
                <div className="img-wrapper">

                    <img src="/image/login.jpg" alt="login-img" />
                </div>
                <div className="login-wrapper">
                    <div className="login-header">
                        <span className="login-header-text">
                            立即登录
                        </span>
                    </div>
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
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="请输入密码"
                            // iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}

                            />
                            {/* <Input
                                
                                type="password"
                                placeholder="请输入密码"
                            /> */}
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                忘记密码？
                            </a>
                        </Form.Item>

                        <Form.Item>
                            {/* <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button> */}
                            <ConfirmBtn
                                text="登录"
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
                                <a href="/register" className="register-link" >现在注册!</a>
                            </div>

                        </Form.Item>
                    </Form>
                </div>

            </div>
        </>


    )

}

export default Login