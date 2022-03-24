import React from 'react'
import style from './style.module.scss'
import ConfirmBtn from '../ConfirmBtn/ConfirmBtn'

const PurchasedBox = (
    {
        key,
        purchasedInfoItem
    }


) => {
    // 为什么这里key值传值失败
    console.log(key)
    console.log(purchasedInfoItem);
    const price = "6.00"
    const { movie = {}, day = "", time = "", theater = "" } = purchasedInfoItem;
    const { title = "", imgName = "", imgSrc = "" } = movie;

    const handleCancelSubscribe = () => {
        console.log("cancel subscribe")
    }
    const handlePurchase = () => {
        console.log("purchase success")
    }
    return (
        <div className={style["purchased-wrapper"]}>
            <div className={style["purchased-content"]}>
                <div className={style["content-info"]}>
                    <div className={style["content-info-img"]}>
                        <img src={imgSrc} alt={imgName} />
                    </div>
                    <div className={style["content-info-text"]}>
                        <h3 className={style["info-text-header"]}>
                            {title}
                        </h3>
                        <div className={style["info-text-more"]}>
                            <div className={style["more-loc"]}>
                                {theater}
                            </div>
                            <div className={style["more-specific"]}>
                                <span className={style["day"]}>{day}</span>
                                <span className={style["time"]}>{time}</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={style["content-func"]}>
                    <dic className={style["func-price"]}>
                            <span className={style["price-icon"]}>￥</span>
                            <span className={style["price-amount"]}>{price}</span>
                    </dic>
                    <div className={style["func-btn"]}>
                        <div className={style["func-btn-cancel"]}>
                            <ConfirmBtn
                                text="取消预定"
                                loading={false}
                                className="cancel-btn"
                                onClick={handleCancelSubscribe}>

                            </ConfirmBtn>
                        </div>
                        <div className={style["func-btn-purchase"]}>
                            <ConfirmBtn
                                text="购买"
                                loading={false}
                                className="confirm-btn"
                                onClick={handlePurchase}>

                            </ConfirmBtn>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default PurchasedBox;