import React, { useState } from "react";
import style from "./style.module.scss";
// import "./style.scss";
import { Card, Avatar, Popover } from 'antd';
import { HeartFilled, EllipsisOutlined, SettingOutlined, HeartOutlined, EyeOutlined } from '@ant-design/icons';
import $ from 'jquery';
import PropTypes from 'prop-types';
import MovieModal from "../MovieModal/MovieModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCollectionInfo, removeCollectionInfo, setLikeStatus } from "../../redux/movieReducers/action";
import { add, findIndex } from "lodash";
import { clear } from "@testing-library/user-event/dist/clear";



const { Meta } = Card;

const MovieBox = (props) => {
    // console.log(setMovieModal);
    const {
        movieInfo,
        setMovieModalShow,
        setMovieModalInfo,
        setLoading
    } = props

    const { ID, title, imgName, imgSrc, genres, plots, credits } = movieInfo;
    const collectionInfoList = useSelector(state => state.CollectionInfo.collectionInfoList);
    console.log(collectionInfoList)
    const indexExist = findIndex(collectionInfoList, { ID: movieInfo.ID })
    console.log(indexExist)
    const [likeStatus, setLikeStatus] = useState(false);

    const idPath = "/details";
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 打开modal框
    const onEyeClick = (e) => {
        // console.log("like");
        setMovieModalShow(true);
        setMovieModalInfo(movieInfo);
    }
    const onEllipsisClick = () => {
        navigate(`/details/${ID}`)
    }

    // collection的add和remove
    const handleLike = () => {
        setLikeStatus(true);
        dispatch(addCollectionInfo(movieInfo));
    }
    const handleRedLike = () => {
        setLikeStatus(false);
        dispatch(removeCollectionInfo(movieInfo));

        setLoading(true);
        const timer = setTimeout(()=>{
            setLoading(false);
            clear(timer);
        },100);
    }
    return (

        <div className={style["moviebox"]}>

            <div className={style["moviebox-content"]}>
                <Card
                    hoverable
                    // style={{ width: 200, height:300 }}
                    cover={
                        (
                            <>
                                <img alt={imgName} src={imgSrc} />
                                <div className="moviebox-like" onClick={onEyeClick}>
                                    <span >
                                        <EyeOutlined />
                                    </span>
                                    {/* "更多信息" */}
                                </div>
                            </>
                        )

                    }
                    actions={[
                        <SettingOutlined key="setting" style={{ color: 'white' }} />,

                        // 有popover，不是很理想，后续优化
                        // <Popover placement="bottom"
                        //     content="我想看"
                        //     trigger="hover"
                        //     //  visible="true"
                        //     //  color="black"
                        //     autoAdjustOverflow
                        // >
                        // 
                        // </Popover>,
                        <>
                            {indexExist == -1 ? <HeartOutlined key="like" onClick={handleLike} />
                                : <HeartFilled key="redLike" onClick={handleRedLike} style={{ color: 'red' }} className="heart-filled" />}
                        </>,



                        < EllipsisOutlined key="ellipsis" onClick={onEllipsisClick} />,
                    ]}
                >
                    <Meta
                        title={title}
                    // description={description}
                    />

                </Card>

            </div>

        </div>

    )
}

export default MovieBox;

MovieBox.propTypes = {
    movieInfo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imgName: PropTypes.string,
        imgSrc: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired
    }),
    setMovieModalShow: PropTypes.func.isRequired,
    setMovieModalInfo: PropTypes.func.isRequired
}
