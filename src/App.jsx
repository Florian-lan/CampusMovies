import React, {useCallback, useEffect} from "react";
import AppRouter from './router/AppRouter';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer'
import './App.css';
import MovieInfo from './Data/MovieInfo/MovieInfo.json';

import {
    setMovieInfo,
} from './redux/movieReducers/action';

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";





const App = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        // 清除缓存数据，测试阶段需要，后续可以删去
        localStorage.clear();
        
        
        
        // 获取/加载测试数据
        if(!localStorage.getItem('movieInfo')){
            localStorage.setItem('movieInfo',JSON.stringify(MovieInfo));
        }

        // 取出测试数据
        const movieInfoList = JSON.parse(
            localStorage.getItem('movieInfo')
        );
        // console.log(movieInfoList);
        console.log(movieInfoList);

        dispatch(setMovieInfo(movieInfoList));

        // return () => {
        // };
    }, []);


    return (
        <div className="App">
            <Header />
            <AppRouter />
            <Footer/>

        </div>



    )
}

export default App;

