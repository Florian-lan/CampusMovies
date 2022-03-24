import React, { useCallback, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from './router/AppRouter';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer'
import './App.css';
import MovieInfo from './Data/MovieInfo/MovieInfo.json';

import {
    setMovieInfo,
    setCollectionInfo,
    setPurchasedInfo
} from './redux/movieReducers/action';

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";





const App = (props) => {
    const dispatch = useDispatch();
    const initialCollectionInfo = [];
    const initialPurchasedInfo = [{
        day: "五月二号，星期一",
        movie: { ID: '10001', title: '蝙蝠侠', imgName: 'Batman', imgSrc: '/image/movie-cards/batman.jpg'},
        theater: "夏新厅",
        time: "15:00"
    }];
    useEffect(() => {
        // 清除缓存数据，测试阶段需要，后续可以删去
        localStorage.clear();

        // 基本信息初始化
        if (!localStorage.getItem('movieInfo')) {
            localStorage.setItem('movieInfo', JSON.stringify(MovieInfo));
        }
        const movieInfoList = JSON.parse(
            localStorage.getItem('movieInfo')
        );
        // 是一个对象
        console.log(movieInfoList.movies);
        dispatch(setMovieInfo(movieInfoList));

        // collection信息初始化
        if (!localStorage.getItem('collectionInfo')) {
            localStorage.setItem('collectionInfo', JSON.stringify(initialCollectionInfo));
        }
        const collectionInfo = JSON.parse(localStorage.getItem('collectionInfo'));
        // 更新redux
        dispatch(setCollectionInfo(collectionInfo));

        // purchased 信息初始化
        if (!localStorage.getItem('purchasedInfo')) {
            localStorage.setItem('purchasedInfo', JSON.stringify(initialPurchasedInfo));
        }
        const purchasedInfo = JSON.parse(localStorage.getItem('purchasedInfo'));
        dispatch(setPurchasedInfo(purchasedInfo));

    }, []);


    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <AppRouter />
                <Footer />

            </BrowserRouter>


        </div>



    )
}

export default App;

