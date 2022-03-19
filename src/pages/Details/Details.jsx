import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PriComments from '../../components/PriComments/PriComments'
import RateModal from '../../components/RateModal/RateModal'
import CardTitle from '../../components/CardTittle/CardTitle'
import PurchaseModal from '../../components/PurchaseModal/PurchaseModal'
import Theater from './Theater/Therter'
import './style.scss'
import { useParams } from 'react-router-dom';
import { find } from "lodash"
import { Card } from 'antd'

// TODO
// 目前版本是所有信息都维护在movieInfo中，包括影厅的上映场次信息
// 之后实现后端的时候需要将信息分开处理
// 获取影片ID之后，在影院信息数据库中查找该ID的排片信息


const Details = () => {

    const [rateModalShow, setRateModalShow] = useState(false);
    // const [purchaseModalShow, setPurchaseModalShow] = useState(false);

    // 这里取出的是字符串
    // 获取id
    const { id } = useParams();
    const movieInfoList = useSelector((state) => {
        return state.MovieInfo;
    }).movies;

    // 引用lodash中的函数，获取指定电影信息
    const movieInfoItem = find(movieInfoList, { "ID": id });
    console.log(movieInfoItem);



    const { auxiliary = {}, credits = {}, genres = [], plots = "", imgSrc = "", title, showTime = {} } = movieInfoItem;
    // console.log(credits.director[0]);

    // 对象的值转化为数组
    let auxiliaryInfo = Object.values(auxiliary);
    // console.log(movieInfoItem);
    console.log(auxiliaryInfo);

    console.log(showTime);
    let showTimeTheater = Object.keys(showTime);
    let showTimeTheaterInfo = Object.values(showTime);
    console.log(showTimeTheater);
    console.log(showTimeTheaterInfo);

    const handleRateClick = () => {
        console.log("tese");
        setRateModalShow(true);
    }


    // const detailsId = useSelector((state) =>{
    //     console.log(state);
    //     return state.DetailsId;
    // })
    // console.log(detailsId);

    return (
        <div className="details-wrapper">
            <div className="details-body">

                <div className="details-header">
                    <div className="header-title">
                        <h1 className="main">蝙蝠侠</h1>
                        <div className="auxiliary">
                            <ul className="auxiliary-list">
                                {auxiliaryInfo?.map((val, index) => {
                                    return (
                                        <li className="list-items" key={index} >
                                            {val}
                                        </li>
                                    )

                                })}

                            </ul>
                        </div>

                    </div>
                    <div className="header-rate">

                        <div className={`aggregate-rating ${id>20000 ? "invisible": " " }`}>
                            <div className="rating-title">CM RATING</div>
                            <a href="#" className="rating-box">
                                <div className="rating-box-content">
                                    <div className="rating-box-content-star">
                                        <img src="/image/star-concrete.svg" alt="rating-star-concrete" />
                                    </div>
                                    <div className="rating-box-content-number">
                                        <span className="number">8.6</span>
                                        <span className='number2'>/10</span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="user-rating">
                            <div className="rating-title">YOUR RATING</div>
                            <a href="#" className="rating-box" onClick={handleRateClick}>
                                <div className="rating-box-content">
                                    <div className="rating-box-content-star">
                                        <img src="/image/star.svg" alt="rating-star" />
                                    </div>
                                    <div className="rating-box-content-text">Rate</div>
                                </div>
                            </a>


                        </div>
                    </div>
                </div>

                {/* 详细信息 */}
                <div className="details-info-wrapper">
                    <div className="details-info">
                        <div className="info-img">
                            <img src={imgSrc} alt="details-img" />
                        </div>
                        <div className="info-content">
                            <p className="info-content-synopsis">
                                {plots}
                            </p>
                            <ul className="info-content-list">
                                <li className="list-item">
                                    <strong> 导演： </strong>
                                    {credits.director[0]}
                                </li>
                                <li className="list-item">
                                    <strong> 编剧：</strong>
                                    {
                                        credits.writers?.map((val, index) => {
                                            return ` ${val} /`
                                        })
                                    }
                                </li>
                                <li className="list-item">
                                    <strong> 类型：</strong>
                                    {genres?.map((val, index) => {
                                        return ` ${val} /`;
                                    })}
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>


                {/* 演职人员 */}
                <CardTitle
                    title="演职人员"
                    description={`影片${title}的参演人员`}
                />

                {/* 播放地点和时间 */}
                <CardTitle
                    title="播放信息"
                    description={`影片${title}的播放时间和地点`}
                />

                {
                    showTimeTheater?.map((value, index) => {

                        return (
                            <Theater
                                key={index}
                                showTimeTheater={value}
                                showTimeTheaterInfo={showTimeTheaterInfo[index]}

                            />
                        )
                    })
                }






                <div className="body-comments">
                    <PriComments />
                </div>


            </div>
            {/* <PurchaseModal purchaseModalShow={purchaseModalShow} setPurchaseModalShow={setPurchaseModalShow} wrapClassName="standardModal"/> */}
            <RateModal rateModalShow={rateModalShow} setRateModalShow={setRateModalShow} wrapClassName="standardModal" />

        </div>




    )
}

export default Details;
