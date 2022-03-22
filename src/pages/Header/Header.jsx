import React, { useState } from "react";
import './style.scss';
import { Input } from 'antd';
import SearchBox from "./searchBox/searchBox";
import { SearchOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation } from "react-router-dom";


const { Search } = Input;
const { SubMenu } = Menu;


const Header = () => {
    
    const [val, setVal] = useState("show")
    const location = useLocation()

    const handleClick = (e) =>{
      
            console.log('click ', e);
            setVal(e.key)


    }

    const test = () => { console.log("test") }
    return (
        <>
            <div className="headerWrap">

                <nav className="header navbar navbar-expand-lg navbar-light ">
                    {/* logo */}
                    <nav className="navbar navbar-light ">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                <img src='/image/logo_Desktop.svg' alt='homepage' width="121" height="31" />
                            </a>
                        </div>
                    </nav>


                    <div className="collapse navbar-collapse" >
                        <div className="search">
                            <SearchBox />
                        </div>




                     
                        {/* func-zone */}
                        <div className="funczone">
                            <Menu onClick={handleClick}  selectedKeys={[location.pathname]} mode="horizontal">

                                <Menu.Item key="/home">
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        主页
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="/store">
                                    <a href="/store" target="_blank" rel="noopener noreferrer">
                                        影库
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="/personal">
                                    <a href="/personal" target="_blank" rel="noopener noreferrer">
                                        我的
                                    </a>
                                </Menu.Item>
                            </Menu>
                            {/* <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"> 电影 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"> 演出 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="btn nav-link" href="#" data-bs-toggle="button"> 讯息 <span className="sr-only">(current)</span></a>
                            </li>
                        </ul> */}

                            {/* user */}
                            <nav className="navbar navbar-light ">
                                <div className="container">
                                    <a className="navbar-brand" href="#">
                                        <img src='/image/person-circle.svg' alt='user' width="30" height="30" />
                                    </a>
                                </div>
                            </nav>
                        </div>



                        {/* <a className="navbar-brand" href="/">
                            <img src='image/person-circle.svg' alt='user' className="userlogo" />
                        </a> */}

                    </div>
                </nav>

            </div>


        </>
    );
};



export default Header;
