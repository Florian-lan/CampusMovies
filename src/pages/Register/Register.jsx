import React from 'react'
import './style.scss'
import { Form, Input, Button, Checkbox, Cascader } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import ConfirmBtn from "../../components/ConfirmBtn/ConfirmBtn";


const Register = () => {


    const options = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                        {
                            value: 'xiasha',
                            label: 'Xia Sha',
                            disabled: true,
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua men',
                        },
                    ],
                },
            ],
        },
    ];



    function onChange(value, selectedOptions) {
        console.log(value, selectedOptions);
    }

    function filter(inputValue, path) {
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const handleRegister = () => {
        console.log("register")
    }
    return (
        <>
            <div className="register-content-wrapper">
                <div className="img-wrapper">
                    <img src="/image/login.jpg" alt="login-img" />
                </div>

                <div className="register-wrapper">
                    <div className="register-header">
                        <span className="register-header-text">
                            立即注册
                        </span>
                    </div>
                    <Form
                        name="normal_register"
                        className="register-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="university"
                            label="院校"
                            rules={[
                                {
                                    required: true,
                                    message: '请选择您所在的院校',
                                },
                            ]}
                        >
                            <Cascader
                                options={options}
                                onChange={onChange}
                                // placeholder="请选择您所在的院校"
                                showSearch={{ filter }}
                                onSearch={value => console.log(value)}
                            />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            label="学号"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的学号！',
                                },
                            ]}
                        >
                            <Input 
                            // prefix=""
                            prefix={<UserOutlined className="site-form-item-icon" />} 
                            // placeholder="学号" 
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="密码"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的密码！',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                // placeholder="请输入密码"


                            />

                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="确认密码"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的密码！',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                // placeholder="请输入密码"


                            />

                        </Form.Item>
                        <Form.Item
                            name="e-mail"
                            label="邮箱"
                            rules={[
                                {
                                    required: false,
                                    // message: '请输入您的密码！',
                                },
                            ]}
                        >
                            <Input
                                // prefix={<LockOutlined className="site-form-item-icon" />}
                                prefix=" "
                                // placeholder="请输入密码"
                            />

                        </Form.Item>



                        <Form.Item>
                            {/* <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button> */}
                            <ConfirmBtn
                                text="注册"
                                loading={false}
                                className="register-form-button"
                                onClick={handleRegister}
                                type="primary"
                                htmlType="submit"
                            >

                            </ConfirmBtn>

                            <div className="login">
                                <span className="login-or">
                                    Or
                                </span>
                                <a href="/login" className="login-link" >返回登录</a>
                            </div>


                        </Form.Item>
                    </Form>

                </div>



            </div>
        </>
    )
}

export default Register;

