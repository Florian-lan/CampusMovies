import style from './style.module.scss'
import React from 'react'
import { Modal, Rate } from 'antd'

const RateModal = (props) => {

    const { rateModalShow,
        setRateModalShow,
        wrapClassName
    } = props;

    const handleCancel = () => {
        setRateModalShow(false);
    }
    const handleRating = (number) => {
        // number为评分
        console.log(number);
        setRateModalShow(false);
    }
    return (
        <Modal
            visible={rateModalShow}
            width={800}
            onCancel={handleCancel}
            footer={null}
            wrapClassName={`${style["rate-modal-wrapper"]} ${wrapClassName ? wrapClassName : " "}`}
        >
            <div className={style["rate-body"]}>
                <div className={style["body-header"]}>RATE THIS</div>
                <div className={style["body-title"]}>The Batman</div>
                <Rate
                    allowHalf
                    defaultValue={2.5}
                    count={10}
                    onChange={handleRating}
                />

            </div>


        </Modal>

    )
}

export default RateModal;