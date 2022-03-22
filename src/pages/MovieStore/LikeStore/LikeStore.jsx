import { Spin } from 'antd';
import { divide } from 'lodash';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import MovieBox from '../../../components/MovieBox/MovieBox';
import MovieModal from '../../../components/MovieModal/MovieModal';


const LikeStore = () => {

    const [movieModalShow, setMovieModalShow] = useState(false);
    const [movieModalInfo, setMovieModalInfo] = useState();
    const [loading, setLoading] = useState(false);
    // 取collection信息
    const collectionInfoList = useSelector(state => {
        console.log(state.CollectionInfo.collectionInfoList);
        return state.CollectionInfo.collectionInfoList;
    })
    console.log("list");


    
    if(loading){
        return(
            <Spin 
            size='large'
            spinning={loading}
            ></Spin>
        )
    }else{
    return (
         <>
            {
                collectionInfoList?.map((val, index) => {
                    {/* console.log(setMovieModalShow) */ }
                    return (
                        <MovieBox
                            key={index}
                            movieInfo={val}
                            setMovieModalShow={setMovieModalShow}
                            setMovieModalInfo={setMovieModalInfo}
                            setLoading={setLoading}
                        />
                    )
                })
            }
            <MovieModal showState={movieModalShow} setShowState={setMovieModalShow} movieModalInfo={movieModalInfo} wrapClassName="standardModal" />

        </>



    )
        }

}

export default LikeStore;