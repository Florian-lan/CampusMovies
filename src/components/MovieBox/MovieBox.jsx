import React from "react";
import style from "./style.module.scss";
// import "./style.scss";
import { Card, Avatar, Popover } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, HeartOutlined, EyeOutlined } from '@ant-design/icons';
import $ from 'jquery';
import PropTypes from 'prop-types';
import MovieModal from "../MovieModal/MovieModal";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDetailsId, setMovieInfo } from "../../redux/movieReducers/action";


const { Meta } = Card;

const MovieBox = (props) => {
    // console.log(setMovieModal);
    const {
        movieInfo,
        setMovieModalShow,
        setMovieModalInfo
    } = props

    const { ID, title, imgName, imgSrc, genres, plots, credits } = movieInfo;
    const idPath = "/details";
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // console.log(imgSrc)

    // console.log(movieInfo) 

    // 打开modal框
    const onEyeClick = (e) => {
        console.log("like");
        setMovieModalShow(true);
        setMovieModalInfo(movieInfo);
    }
    const onEllipsisClick = () => {

        // const dispatch = useDispatch();
        // dispatch(setDetailsId(ID));
        navigate(`/details/${ID}`)




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
                        <SettingOutlined key="setting" sytle={{ color: 'white' }} />,

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


                        <HeartOutlined key="like" />,

                        <EllipsisOutlined key="ellipsis" onClick={onEllipsisClick} />,
                    ]}
                >
                    <Meta
                        title={title}
                    // description={description}
                    />

                </Card>

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
