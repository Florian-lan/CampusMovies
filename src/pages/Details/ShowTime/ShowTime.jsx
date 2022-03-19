import React, {useState} from 'react'
import style from './style.module.scss'

import ConfirmBtn from '../../../components/ConfirmBtn/ConfirmBtn'
import PurchaseModal from '../../../components/PurchaseModal/PurchaseModal'

const ShowTime = (
    {
        key,
        day,
        hour
    }
) => {
    const [purchaseModalShow, setPurchaseModalShow] = useState(false);

    const handleClick = ()=>{
        console.log("test")
        setPurchaseModalShow(true);
    }


    return (
        <div className={style["theater-showtime"]}>
            <h3 className={style["showtime-day"]}>
                {day}
            </h3>
            <ul className={style["showtime-hour"]}>
            
                {
                    hour?.map((value,index)=>{
                        return (
                            <li className={style["showtime-hour-item"]}>
                            <ConfirmBtn 
                            key={index} 
                            text={value}
                            className="timeBtn"
                            onClick = {handleClick}
                            />

                            </li>
                           

                        )

                    })
                }

            </ul>

            <PurchaseModal purchaseModalShow={purchaseModalShow} setPurchaseModalShow={setPurchaseModalShow} wrapClassName="standardModal"/>
        </div>

    )
}

export default ShowTime;
