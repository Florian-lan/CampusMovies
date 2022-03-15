import React, { useState } from "react";
import './style.scss';

import MovieBox from "../../components/MovieBox/MovieBox";
import CardTitle from "../../components/CardTittle/CardTitle";
import MovieModal from "../../components/MovieModal/MovieModal";
import PrimaryTag from "../../components/PrimaryTag/PrimaryTag";
import { useSelector } from "react-redux";
import { Tabs } from 'antd';






const Store = () => {
    const { TabPane } = Tabs;

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
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="所有演出" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="我喜欢的" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>

                    <div className="content-item">
                    <PrimaryTag content={"teste"}/>
                        <div className="item-grid">
                        
                            {

                                movieInfoList?.map((val, index) => {
                                    {/* console.log(setMovieModalShow) */ }
                                    return (
                                        <MovieBox
                                            key={index}
                                            movieInfo={val}
                                            setMovieModalShow={null}
                                            setMovieModalInfo={null}
                                        />
                                    )

                                })
                            }
                        </div>
                    </div>
                </section>
            </section>

        </div>


    )

}

export default Store;


