import React, { useState } from "react";
import './style.scss';

import MovieBox from "../../components/MovieBox/MovieBox";
import CardTitle from "../../components/CardTittle/CardTitle";
import MovieModal from "../../components/MovieModal/MovieModal";
import PrimaryTag from "../../components/PrimaryTag/PrimaryTag";
import { useSelector } from "react-redux";
import { Tabs } from 'antd';






const MovieStore = () => {
    const { TabPane } = Tabs;

    const [movieModalShow, setMovieModalShow] = useState(false);
    const [movieModalInfo, setMovieModalInfo] = useState();

    // 取movieInfo信息
    const movieInfoList = useSelector(state => {
        // console.log(state.MovieInfo.movies);
        return state.MovieInfo.movies;
    });


    const callback = (key) => {
        console.log(key);
    }

    return (
        <div className="store-wrapper">
            <section className="store-body">
                <hgroup className="store-title">
                    <h1 className="title-text">
                        近期上映
                    </h1>
                </hgroup>

                <section className="store-content">

                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="所有电影" key="1">
                            {
                                <>
                                <div className="item-grid">

                                    {

                                        movieInfoList?.map((val, index) => {
                                            {/* console.log(setMovieModalShow) */ }
                                            return (
                                                <MovieBox
                                                    key={index}
                                                    movieInfo={val}
                                                    setMovieModalShow={setMovieModalShow}
                                                    setMovieModalInfo={setMovieModalInfo}
                                                    
                                                />
                                            )

                                        })
                                    }
                                </div>
                                <MovieModal showState={movieModalShow} setShowState={setMovieModalShow} movieModalInfo={movieModalInfo} wrapClassName="standardModal"/>
                                </>
                                

                            }
                        </TabPane>
                        <TabPane tab="所有演出" key="2">
                            {
                                <PrimaryTag content="dfs" />
                            }
                        </TabPane>
                        <TabPane tab="我喜欢的" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>

                    <div className="content-item">


                    </div>
                </section>
            </section>

        </div>


    )

}

export default MovieStore;


