import React from "react";
import "./style.scss";
import { Card, Avatar, Popover } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, HeartOutlined, EyeOutlined } from '@ant-design/icons';
import $ from 'jquery';
import PropTypes from 'prop-types';
import MovieModal from "../MovieModal/MovieModal";


const { Meta } = Card;

const MovieBox = (props) => {
    // console.log(setMovieModal);
    const {
        movieInfo,
        setMovieModalShow,
        setMovieModalInfo
    } = props

    const { title, imgName, imgSrc, genres, plots, credits } = movieInfo;
    // console.log(imgSrc)

    // console.log(movieInfo) 

    // 打开modal框
    const onEyeClick = (e) => {
        console.log("like");
        setMovieModalShow(true);
        setMovieModalInfo(movieInfo);
    }

    return (

        <div className="moviebox">
            {/* 为什么数字要用括号？传参数的时候 */}
            <div className="moviebox-content">
                <Card
                    hoverable
                    // style={{ width: 200, height:300 }}
                    cover={
                        (
                            <>
                                <img
                                    alt={imgName}
                                    src={imgSrc}
                                />
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
                        <SettingOutlined key="setting" sytle={{ color: 'white' }} />,

                        <Popover placement="bottom" 
                        content="我想看"
                         trigger="hover" 
                        //  visible="true"
                        //  color="black"
                         autoAdjustOverflow
                         >
                            <HeartOutlined key="like" />
                        </Popover>,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        title={title}
                    // description={description}
                    />
                </Card>
                {/* 插入元素 */}

                {/* <div className="moviebox-like">
                    <span onclick={onlike}>
                        <HeartOutlined />
                    </span>
                </div> */}
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
