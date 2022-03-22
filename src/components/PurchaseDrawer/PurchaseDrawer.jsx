import React from 'react'
import style from './style.module.scss'
import { Drawer } from 'antd'
import ConfirmBtn from '../ConfirmBtn/ConfirmBtn'
import { ShoppingOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { addPurchasedInfo } from '../../redux/movieReducers/action'

const PurchaseDrawer = ({
    purchaseDrawerShow,
    setPurchaseDrawerShow,
    wrapClassName,
    showTimeTheater,
    showTime,
    showDay,
    // title
    movieInfoItem

}) => {
    // count,price暂定，之后再影院信息的文件中进行维护
    const all = 100;
    const count = 98;
    const price = 6;
    // console.log(typeof showTime)

    let purchasedItem= {
        movie: movieInfoItem,
        day:showDay,
        time: showTime,
        theater: showTimeTheater
    }
    const { imgName = "", imgSrc = "", title = "" } = movieInfoItem;
    
    const purchasedInfoList = useSelector(state=>{
        return state.PurchasedInfo.purchasedInfoList;
    })
    const dispatch = useDispatch();
    // console.log(purchasedItem.movie.ID)
    console.log(purchasedInfoList)
    console.log(purchasedItem)


    const onClose = () => {
        setPurchaseDrawerShow(false);
    }
    const handleCancel = () => {
        setPurchaseDrawerShow(false);

    }

    const handleConfirm = () => {
        setPurchaseDrawerShow(false);
        // count--;
        // console.log(count);
        dispatch(addPurchasedInfo(purchasedItem));
    }

    return (
        <Drawer
            // title={`${title} · 预定信息`}
            title={
                <div className={style["title"]}>
                    <div className={style["title-svg"]}>
                        <ShoppingOutlined />
                    </div>

                    <span className={style["title-name"]}>
                        {title}
                    </span>
                    <span className={style["title-fix"]}>
                        预定信息
                    </span>

                </div>
            }
            placement="top"
            onClose={onClose}
            visible={purchaseDrawerShow}
            // getContainer={false}
            className="standardDrawer"
            width={300}
            closable={false}
        >
            <div className={style["drawer-content"]}>
                <div className={style["drawer-content-top"]}>
                    <div className={style["content-poster"]}>
                        <img
                            alt={imgName}
                            src={imgSrc}
                            className={style["content-poster-img"]}
                        />
                    </div>
                    <ul className={style["content-list"]}>

                        <li className={style["list-item"]}>
                            <span className={style["item-key"]}>
                                预定场次：
                            </span>
                            <span className={style["item-value"]}>
                                <span className={style["showTimeTheater"]}>
                                    {showTimeTheater}
                                </span>
                                <span className={style["showTime"]}>
                                    {showTime}
                                </span>
                            </span>
                        </li>
                        <li className={style["list-item"]}>
                            <span className={style["item-key"]}>
                                剩余位置：
                            </span>
                            <div className={style["item-value-both"]}>
                                <span className={style["item-value"]}>
                                    {count}
                                </span>
                                <span className={`${style["item-value"]} ${style["second"]}`}>
                                    {` /${all}`}
                                </span>
                            </div>

                        </li>
                        <li className={style["list-item"]}>
                            <span className={style["item-key"]}>

                                价格：
                            </span>

                            <span className={style["item-value"]}>
                                {`￥${price} `}
                            </span>

                        </li>

                    </ul>
                    <div className={style["content-func"]}>
                        <div className={style["func-confirm"]}>
                            <ConfirmBtn
                                text="预定"
                                loading={false}
                                className="confirm-btn"
                                onClick={handleConfirm}
                            />
                        </div>
                        <div className={style["func-cancel"]}>
                            <ConfirmBtn
                                text="取消"
                                loading={false}
                                className="cancel-btn"
                                onClick={handleCancel}


                            />

                        </div>


                    </div>
                </div>


            </div>
        </Drawer>
    )

}

export default PurchaseDrawer;