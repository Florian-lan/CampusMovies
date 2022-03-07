import React from 'react';
import './style.scss';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {InputGroup, FormControl, Button} from 'react-bootstrap'


const { Search } = Input;

const SearchBox = () => {
    const onSearch = value => console.log('test');

    return (
        // <form className="form-inline my-2 my-lg-0">
        //     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        //     <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={onSearch}>Search</button>
        // </form>

        // <Input  placeholder="Basic usage" prefix={<SearchOutlined/>} />
        <Input className="input" size="large" placeholder="large size" prefix={<SearchOutlined />} />
        
    )



}

export default SearchBox;
