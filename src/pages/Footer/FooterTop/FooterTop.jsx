import React, { useState } from 'react';
import Footer from '../Footer';
import './style.scss';
import { Input, Button,message } from 'antd';
import { GithubOutlined, TwitterOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import ConfirmBtn from '../../../components/ConfirmBtn/ConfirmBtn';

const FooterTop = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = (e) => {
        console.log("test");
        setLoading(true);
        const timer = setTimeout(()=>{
            setLoading(false);
            message.success({
                duration: 1,
                content: '订阅成功',
                className: 'my-message',
                style: {
                  marginTop: '10vh',

                },
              });
            clearTimeout(timer);
        },1000)

    }
    return (
        <div className="footer-top">
            <div className="footer-top-content">
                <div className="follow">
                    <h3 className="follow-text">
                        关注我们
                    </h3>
                    <ul className="follow-links">
                        <li>
                            <a className="follow-links-logo" href="#">
                                <GithubOutlined style={{ color: '#d4d4d5', fontSize: "20px" }} />
                            </a>
                        </li>
                        <li>
                            <a className='follow-links-logo' href="#">
                                <TwitterOutlined style={{ color: '#d4d4d5', fontSize: "20px" }} />
                            </a>
                        </li>

                        <li><a className='follow-links-logo' href="#">
                            <FacebookOutlined style={{ color: '#d4d4d5', fontSize: "20px" }} />
                        </a></li>

                        <li><a className='follow-links-logo' href="#">
                            <InstagramOutlined style={{ color: '#d4d4d5', fontSize: "20px" }} />
                        </a></li>
                    </ul>
                </div>
                <div className="subscribe">
                    <h3 className='subscribe-text'>
                        获取最新演出的更新
                    </h3>

                    <Input className="subscribe-input"
                        placeholder='请输入您的电子邮箱：'
                        allowClear
                        suffix={

                            // <Button className='input-button' onClick={handleClick}>
                            //     订阅
                            // </Button>
                            <ConfirmBtn

                                className="input-button"
                                loading={loading}
                                onClick= {handleClick}
                                text="订阅"
                            >

                            </ConfirmBtn>

                        }
                        // onClick = {()=>{console.log('test')}}
                    />

                </div>
            </div>
        </div>
    )
}

export default FooterTop;
