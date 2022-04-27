import React from 'react'
import './style.scss'
import { Form, Input, Button, Checkbox, Cascader } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import ConfirmBtn from "../../components/ConfirmBtn/ConfirmBtn";
import { useDispatch } from 'react-redux';
import {register} from '../../store/userStore/action'


const Register = () => {

    // label是显示值
    // value是提交值
    const options = [
        {
            value: '北京市',
            label: '北京市',
            children: [
                {
                    value: '清华大学',
                    label: '清华大学',
                },
                {
                    value: '北京大学',
                    label: '北京大学',
                },
                {
                    value: '中国人民大学',
                    label: '中国人民大学',
                },
                {
                    value: '北京航空航天大学',
                    label: '北京航空航天大学',

                },
                {
                    value: '北京理工大学',
                    label: '北京理工大学',
                }, 
                {
                    value: '中国农业大学',
                    label: '中国农业大学',
                },
                {
                    value: '北京师范大学',
                    label: '北京师范大学',
                },
                {
                    value: '中央民族大学',
                    label: '中央民族大学',
                }
            ],
        },
        {
            value: '天津市',
            label: '天津市',
            children: [
                {
                    value: '天津大学',
                    label: '天津大学',
                },
                {
                    value: '南开大学',
                    label: '南开大学',
                }
            ],
        },
        {
            value: '辽宁省',
            label: '辽宁省',
            children: [
                {
                    value: '大连理工大学',
                    label: '大连理工大学',
                },
                {
                    value: '东北大学',
                    label: '东北大学',
                }
            ],
        },
        {
            value: '吉林省',
            label: '吉林省',
            children: [
                {
                    value: '吉林大学',
                    label: '吉林大学',
                }
            ],
        },
        {
            value: '黑龙江省',
            label: '黑龙江省',
            children: [
                {
                    value: '哈尔滨工业大学',
                    label: '哈尔滨工业大学',
                },
                
            ],
        },
        {
            value: '上海市',
            label: '上海市',
            children: [
                {
                    value: '复旦大学',
                    label: '复旦大学',
                },
                {
                    value: '同济大学',
                    label: '同济大学',
                },
                {
                    value: '上海交通大学',
                    label: '上海交通大学',
                },
                {
                    value: '华东师范大学',
                    label: '华东师范大学',
                },
                
            ],
        },
        {
            value: '江苏省',
            label: '江苏省',
            children: [
                {
                    value: '南京大学',
                    label: '南京大学',
                },
                {
                    value: '东南大学',
                    label: '东南大学',
                }
            ],
        },
        {
            value: '浙江省',
            label: '浙江省',
            children: [
                {
                    value: '浙江大学',
                    label: '浙江大学',
                }
            ],
        },
        {
            value: '安徽省',
            label: '安徽省',
            children: [
                {
                    value: '中国科学技术大学',
                    label: '中国科学技术大学',
                }
            ],
        },

        {
            value: '福建省',
            label: '福建省',
            children: [
                {
                    value: '厦门大学',
                    label: '厦门大学',
                }
            ],
        },
        {
            value: '山东省',
            label: '山东省',
            children: [
                {
                    value: '山东大学',
                    label: '山东大学',
                },
                {
                    value: '中国海洋大学',
                    label: '中国海洋大学',
                }
            ],
        },
        {
            value: '湖北省',
            label: '湖北省',
            children: [
                {
                    value: '武汉大学',
                    label: '武汉大学',
                },
                {
                    value: '华中科技大学',
                    label: '华中科技大学',
                }
            ],
        },

        {
            value: '湖南省',
            label: '湖南省',
            children: [
                {
                    value: '湖南大学',
                    label: '湖南大学',
                },
                {
                    value: '中南大学',
                    label: '中南大学',
                },
                {
                    value: '国防科学技术大学',
                    label: '国防科学技术大学',
                }
            ],
        },

        {
            value: '广东省',
            label: '广东省',
            children: [
                {
                    value: '中山大学',
                    label: '中山大学',
                },
                {
                    value: '华南理工大学',
                    label: '华南理工大学',
                }
            ],
        },
        
        {
            value: '四川省',
            label: '四川省',
            children: [
                {
                    value: '四川大学',
                    label: '四川大学',
                },
                {
                    value: '电子科技大学',
                    label: '电子科技大学',
                }
            ],
        },

        {
            value: '重庆市',
            label: '重庆市',
            children: [
                {
                    value: '重庆大学',
                    label: '重庆大学',
                },
                
            ],
        },

        {
            value: '陕西省',
            label: '陕西省',
            children: [
                {
                    value: '西安交通大学',
                    label: '西安交通大学',
                },
                {
                    value: '西北工业大学',
                    label: '西北工业大学',
                },
                {
                    value: '西北农林科技大学',
                    label: '西北农林科技大学',
                }
            ],
        },

        {
            value: '甘肃省',
            label: '甘肃省',
            children: [
                {
                    value: '兰州大学',
                    label: '兰州大学',
                }
            ],
        },

    ];

    const dispatch = useDispatch()





    function onChange(value, selectedOptions) {
        // console.log(value, selectedOptions);
    }

    function filter(inputValue, path) {
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        
        // 剔除passwordSure
        const {passwordSure,email,user_name,password} = values
        let {universities} = values
        console.log(universities)

        const university = universities[1]
        console.log(university)


        dispatch(register({user_name,password,university,email}))




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
                        autoComplete='off'
                    >
                        <Form.Item
                            name="universities"
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
                            name="user_name"
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
                            name="passwordSure"
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
                            name="email"
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
                                // onClick={handleRegister}
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

