import React from 'react'
import { Modal } from 'antd'
import style from './style.module.scss'



const PurchaseModal = (
    {


        purchaseModalShow,
        setPurchaseModalShow,
        wrapClassName
    }

) => {

    // count,price暂定，之后再影院信息的文件中进行维护
    const count = 100;
    const price = 6;

    const handleCancel = () => {
        setPurchaseModalShow(false);
    }
    return (
        <Modal
            visible={purchaseModalShow}
            width={800}
            onCancel={handleCancel}
            footer={null}
            wrapClassName={`${style["purchase-modal-wrapper"]} ${wrapClassName ? wrapClassName : " "}`}
        >



            test
        </Modal>

    )

}


export default PurchaseModal;