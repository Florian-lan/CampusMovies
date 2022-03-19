import React from 'react'
import style from './style.module.scss'
import ShowTime from '../ShowTime/ShowTime';
import PurchaseModal from '../../../components/PurchaseModal/PurchaseModal';


const Theater = (
    {
        key,
        showTimeTheater,
        showTimeTheaterInfo
    }
) => {
    const InfoArr = Object.values(showTimeTheaterInfo);
    const loc = InfoArr[0];
    const timeObj = InfoArr[1];
    const timeDay = Object.keys(timeObj);
    const timeHour = Object.values(timeObj);

    // console.log(showTimeTheaterInfo)



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

                            <li key={index} className={style["time-list-items"] }>
                                <div className={style["theater-showtime"]}>
                                    <h3 className={style["showtime-day"]}>
                                        {value}
                                    </h3>
                                    <ul className={style["showtime-hour"]}>

                                        {
                                            timeHour[index]?.map((value, index) => {
                                                return (
                                                    <li className={style["showtime-hour-item"]}>
                                                        <ConfirmBtn
                                                            key={index}
                                                            text={value}
                                                            className="timeBtn"
                                                            onClick={handleClick}
                                                        />

                                                    </li>


                                                )

                                            })
                                        }

                                    </ul>

                                    <PurchaseModal purchaseModalShow={purchaseModalShow} setPurchaseModalShow={setPurchaseModalShow} wrapClassName="standardModal" />
                                </div>
                                {/* <ShowTime key={index} day={value} hour={timeHour[index]} /> */}
                            </li>


                        )
                    })
                }

            </ul>


        </div>
    )
}

export default Theater;