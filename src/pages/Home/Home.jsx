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
                <CardTitle
                    title="最近上映"
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
                            {/* console.log(setMovieModalShow) */}
                            return index < 5 &&
                                <MovieBox
                                    key={index}
                                    movieInfo={val}
                                    setMovieModalShow={setMovieModalShow}
                                    setMovieModalInfo={setMovieModalInfo}
                                />
                        })
                    }

                </div>
            </div>


            <MovieModal showState={movieModalShow} setShowState={setMovieModalShow} movieModalInfo={movieModalInfo}/>

        </div>
    )
}

export default Home;