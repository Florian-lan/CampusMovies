// 导入react
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import store from './store/index'



// test
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'))
