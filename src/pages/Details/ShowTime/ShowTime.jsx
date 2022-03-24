import React, { useState } from 'react'
import style from './style.module.scss'

import ConfirmBtn from '../../../components/ConfirmBtn/ConfirmBtn'
import PurchaseModal from '../../../components/PurchaseModal/PurchaseModal'
import PurchaseDrawer from '../../../components/PurchaseDrawer/PurchaseDrawer'
import { useSelector } from 'react-redux'
import { findIndex, template, find } from 'lodash'
import { setPurchasedInfo } from '../../../redux/movieReducers/action'

const ShowTime = (
    {
        key,
        day,
        hour,
        showTimeTheater,
        // title
        movieInfoItem
    }
) => {
    const [purchaseDrawerShow, setPurchaseDrawerShow] = useState(false);
    const [showTime, setShowTime] = useState("");
    const [isPurchasedTime, setIsPurchasedTime] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false);

    const purchasedInfoList = useSelector(state => {
        return state.PurchasedInfo.purchasedInfoList
    });
    console.log(purchasedInfoList);
    console.log(movieInfoItem);

    // 这部电影的预定时间地点等信息
    const purchasedInfoItem = find(purchasedInfoList, function (temp) { return temp.movie.ID === movieInfoItem.ID; });
    // 不能放在条件语句中
    const temp = purchasedInfoItem ? true : false;


    // 为什么呢？ 这里会触发无限循环
    // setIsPurchased(temp);

    console.log(purchasedInfoItem);

    // 预定成功，显示
    let isDay = false;
    if (purchasedInfoItem) {
        isDay = showTimeTheater === purchasedInfoItem.theater && day === purchasedInfoItem.day;
    }
    console.log(isDay)

    const handleClick = (time, isTime) => {
        // console.log(e.target)
        // console.log(e.currentTarget.innerHTML)
        // setPurchaseModalShow(true);
        setPurchaseDrawerShow(true);
        setShowTime(time);

        // 把是否购买过，传递给drawer
        // setIsPurchasedTime(isTime);
        console.log(showTime)
        // console.log(showTimeTheater)
    }



    return (
        <div className={style["theater-showtime"]}>
            <h3 className={style["showtime-day"]}>
                {day}
            </h3>
            <ul className={style["showtime-hour"]}>

                {
                    hour?.map((value, index) => {
                        let isTime = isDay && value === purchasedInfoItem.time;
                        return (

                            <li className={style["showtime-hour-item"]}>
                                <ConfirmBtn
                                    key={index}
                                    text={value}
                                    className={`timeBtn ${isTime ? "timeCfm" : " "}`}
                                    onClick={() => {
                                        handleClick(value, isTime)
                                    }}
                                />

                            </li>


                        )

                    })
                }

            </ul>


            {/* <PurchaseModal
                purchaseModalShow={purchaseModalShow}
                setPurchaseModalShow={setPurchaseModalShow}
                wrapClassName="standardModal"
                showTimeTheater={showTimeTheater}
                showTime={showTime}
                title={title}

            /> */}

            <PurchaseDrawer
                purchaseDrawerShow={purchaseDrawerShow}
                setPurchaseDrawerShow={setPurchaseDrawerShow}
                isPurchasedTime={isPurchasedTime}
                setIsPurchasedTime={setIsPurchasedTime}
                isPurchased={isPurchased}
                setIsPurchased={setIsPurchased}
                wrapClassName="standardDrawer"
                showTimeTheater={showTimeTheater}
                showTime={showTime}
                showDay={day}
                // title={title}
                movieInfoItem={movieInfoItem}
            />
        </div>

    )
}

export default ShowTime;
