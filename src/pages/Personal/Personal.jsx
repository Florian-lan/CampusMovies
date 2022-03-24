import React, { useState } from 'react'
import './style.scss'
import CardTitle from '../../components/CardTittle/CardTitle'
import PurchasedBox from '../../components/PurchasedBox/PurchasedBox'
import { useSelector } from 'react-redux'

const Personal = () => {
    const purchasedInfoList = useSelector(state => {
        return state.PurchasedInfo.purchasedInfoList;
    });


    console.log(purchasedInfoList);

    return (
        <div className="personal-wrapper">
            <div className="personal-body">
                <section className="body-title">
                    <hgroup className="body-title-group">
                        <h1 className="title-text">
                            您的主页
                        </h1>
                    </hgroup>
                </section>

                <section className="body-content">
                    <div className="content-section">
                        <CardTitle
                            title="已预定的活动"
                            description="您已预定的电影或讲座等活动"
                        />
                        <div className="content-purchased">
                            {
                                purchasedInfoList?.map((value, index) => {
                                    console.log(value);
                                    return (
                                        <PurchasedBox
                                            key={index}
                                            purchasedInfoItem={value}>

                                        </PurchasedBox>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="content-section">
                        <CardTitle
                            title="看过的活动"
                            description="您已经看过的电影或讲座等活动"
                        />
                    </div>

                </section>
            </div>
        </div>
    )
}


export default Personal;