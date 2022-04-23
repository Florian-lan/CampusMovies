// 导入react
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
// import store from './store/movieReducers/store'
import store from './store/index'
import { ConfigProvider } from 'antd'


// test
ReactDom.render(
    <ConfigProvider direction='ltr'>


        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>
    ,
    document.getElementById('root'))
