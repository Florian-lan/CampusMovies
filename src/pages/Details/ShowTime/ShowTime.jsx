import React, { useState } from 'react'
import style from './style.module.scss'

import ConfirmBtn from '../../../components/ConfirmBtn/ConfirmBtn'
import PurchaseModal from '../../../components/PurchaseModal/PurchaseModal'
import PurchaseDrawer from '../../../components/PurchaseDrawer/PurchaseDrawer'

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
    // const [purchaseModalShow, setPurchaseModalShow] = useState(false);
    const [purchaseDrawerShow, setPurchaseDrawerShow] = useState(false);
    const [showTime, setShowTime] = useState("");

    const handleClick = (time) => {


        // console.log(e.target)
        // console.log(e.currentTarget.innerHTML)
        // setPurchaseModalShow(true);
        setPurchaseDrawerShow(true);
        setShowTime(time)
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
                        return (
                            <li className={style["showtime-hour-item"]}>
                                <ConfirmBtn
                                    key={index}
                                    text={value}
                                    className="timeBtn"
                                    onClick={() => {
                                        handleClick(value)
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
                wrapClassName="standardDrawer"
                showTimeTheater={showTimeTheater}
                showTime={showTime}
                // title={title}
                movieInfoItem={movieInfoItem}
            />
        </div>

    )
}

export default ShowTime;
