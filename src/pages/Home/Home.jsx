import React, { useState } from "react";
import './style.scss';
import Banner from "./Banner/Banner";
import MovieBox from "../../components/MovieBox/MovieBox";
import CardTitle from "../../components/CardTittle/CardTitle";
import MovieModal from "../../components/MovieModal/MovieModal";
import { useSelector } from "react-redux";




const Home = () => {
    // 维护modal状态
    const [movieModalShow, setMovieModalShow] = useState(false);

    const [movieModalInfo, setMovieModalInfo] = useState();
    const [loading,setLoading] = useState()


    // 第一个参数是selector函数，返回的值就是useSelector要返回的值
    // 每次dispatch，selector都会将两次的state的值进行浅比较（===），如果不同则re-render该组件（使用这个函数的组件）
    // 第二个参数用于性能优化
    // 取movieInfo信息
    const movieInfoList = useSelector(state => {
        // console.log(state.MovieInfo.movies);
        return state.MovieInfo.movies;
    });

    // console.log(movieInfoList);
    return (
        <div className="home">
            <div className="banner">
                <Banner />
            </div>

            <div className="page-section">
                <div className="page-section1">
                    <CardTitle
                        title="上映影片"
                        description="本周上映的影片"
                    />
                    <div className="page-grid">
                        {/* {console.log(setMovieModalShow)} */}
                        {/* <MovieBox
                        title="Batman"
                        name="Batman"
                        imgSrc="image/movie-cards/batman.jpg"
                        setMovieModal={setMovieModalShow}
                        setMovieModalInfo={setMovieModalShow}

                    /> */}
                        {

                            movieInfoList?.map((val, index) => {
                                {/* console.log(setMovieModalShow) */ }
                                return index < 5 &&
                                    <MovieBox
                                        key={index}
                                        movieInfo={val}
                                        setMovieModalShow={setMovieModalShow}
                                        setMovieModalInfo={setMovieModalInfo}
                                        setLoading = {setLoading}
                                    />
                            })
                        }

                    </div>

                </div>

                <div className="page-section2 section">
                    <CardTitle
                        title="即将上映"
                        description="下周即将上映的影片"
                    />
                </div>


                <div className="page-section3 section">
                    <CardTitle
                        title="本周活动"
                        description="本周计划举行的活动或演出"
                    />
                </div>

                <div className="page-section4 section">
                    <CardTitle
                        title="即将上映"
                        description="下周即将举行的活动或演出"
                    />
                </div>


            </div>


            <MovieModal showState={movieModalShow} setShowState={setMovieModalShow} movieModalInfo={movieModalInfo} wrapClassName="standardModal"/>

        </div>
    )
}

export default Home;