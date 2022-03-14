import React, { createRef } from 'react';
import './style.scss';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className='footer-bottom-content'>
                <div className='footer-bt-info'>
                <a className="footer-bt-info-link link-first" href="#" rel="nofollow">
                    退款与换货
                </a>
                <a className="footer-bt-info-link" href="#" rel="nofollow">
                    帮助
                </a>
                <a className="footer-bt-info-link" href="#" rel="nofollow">
                    我的主页
                </a>
                </div>

                <div className='footer-bt-info'>
                <a className="footer-bt-info-link link-first" href="#" rel="nofollow">
                    关于我们
                </a>
                <a className="footer-bt-info-link" href="#" rel="nofollow">
                    联系我们
                </a>
                <a className="footer-bt-info-link" href="#" rel="nofollow">
                    您的隐私权
                </a>
                <a className="footer-bt-info-link" href="#" rel="nofollow">
                    条款和政策
                </a>
                <a className="footer-bt-info-link" href="#" rel="nofollow">
                    不要出售我的个人信息
                </a>
                <a className="footer-bt-info-link" href="#" rel="nofollow">
                    回馈
                </a>
                </div>
                <font>
                    © 2022 CampusMovies
                </font>
            </div>
        </div>

    )
}

export default FooterBottom;