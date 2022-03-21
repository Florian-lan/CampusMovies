import React, { useState } from 'react'
import style from './style.module.scss'


import PurchaseModal from '../../../components/PurchaseModal/PurchaseModal'
import ConfirmBtn from '../../../components/ConfirmBtn/ConfirmBtn'
import ShowTime from '../ShowTime/ShowTime'


const Theater = (
    {
        key,
        showTimeTheater,
        showTimeTheaterInfo,
        // title
        movieInfoItem
    }
) => {

    // const {title=""} = movieInfoItem;
    const InfoArr = Object.values(showTimeTheaterInfo);
    const loc = InfoArr[0];
    const timeObj = InfoArr[1];
    const timeDay = Object.keys(timeObj);
    const timeHour = Object.values(timeObj);

    // console.log(showTimeTheaterInfo)
    const [purchaseModalShow, setPurchaseModalShow] = useState(false);

    return (
        <div className={style["theater"]}>
            <div className={style["theater-details"]}>
                <h2 className={style["theater-details-header"]}>{showTimeTheater}</h2>
                {/* 位置信息 */}
                <span className={style["theater-details-auxiliary"]}>
                    {loc}
                </span>
            </div>

            <ul className={style["time-list"]}>
                {
                    timeDay?.map((value, index) => {

                        return (

                            <li key={index} className={style["time-list-items"]}>

                                <ShowTime
                                    key={index}
                                    day={value}
                                    hour={timeHour[index]}
                                    showTimeTheater={showTimeTheater}
                                    // title={title}
                                    movieInfoItem={movieInfoItem}


                                />
                            </li>


                        )
                    })
                }

            </ul>

        </div>
    )
}

export default Theater;