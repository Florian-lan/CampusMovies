import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import style from './style.module.scss';
import PrimaryTag from '../PrimaryTag/PrimaryTag';
import ConfirmBtn from '../ConfirmBtn/ConfirmBtn';
import { List, Avatar } from 'antd';

const MovieModal = (props) => {
    const {
        showState,
        setShowState,
        movieModalInfo = { title: '', imgName: '', imgSrc: '' },
        wrapClassName
    } = props;


    // console.log(movieModalInfo)
    const { ID, title, imgName, imgSrc, genres, plots, credits = "" } = movieModalInfo;
    const { director = [], writers = [], stars = [] } = credits;


    // console.log(credits);
    console.log(writers);

    const handleCancel = () => {
        console.log('cancel');
        setShowState(false);

    }
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
        console.log("I like");
        setShowState(false);


        // 处理点击动画
        const clickAnimation = () => {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
                clearTimeout(timer);

            }, 1000)
        }

        // clickAnimation();


    }

    return (
        <Modal
            visible={showState}
            width={800}
            onCancel={handleCancel}
            footer={null}
            wrapClassName={`${style['movieModalWrapper']} 
            ${wrapClassName ? wrapClassName : ''
                }`}
        >
            <div className={style["modal-body"]}>
                <div className={style["modal-content"]}>
                    <div className={style["modal-content-poster-container"]}>
                        <div className={style["modal-content-poster"]}>
                            <img
                                alt={imgName}
                                src={imgSrc}
                                className={style["modal-content-poster-img"]}
                            />
                        </div>
                        <div className={style["modal-content-poster-title"]}>
                            <span className={style["poster-title"]}>
                                {title}
                            </span>
                        </div>
                    </div>


                    <div className={style["modal-content-info"]}>
                        <div className={style["info-genresAndPlots"]}>
                            <div className={style["info-genres"]}>
                                {
                                    genres?.map((val, index) => {
                                        {/* console.log(val) */ }
                                        return <PrimaryTag key={index} content={val} />
                                    }

                                    )
                                }

                            </div>
                            <div className={style["info-plots"]}>
                                <span className={style["info-plots-span"]}>
                                    {plots}
                                </span>
                            </div>
                        </div>


                        <div className={style["info-principal-credits"]}>
                            <ul className={style["credits-list"]}>


                                <li className={style["credits-list-item"]}>
                                    <span className={style["item-label"]}>Director</span>
                                    <ul className={style["item-content-list"]}>
                                        {
                                            director?.map((val, index) => {
                                                return (<>
                                                    <li key={index} className={style["item-content-list-item"]}>
                                                        <span key={index} className={style["specific-item-content"]}>{val}</span>
                                                    </li>

                                                </>)

                                            })

                                        }

                                    </ul>
                                </li>


                                <li className={style["credits-list-item"]}>
                                    <span className={style["item-label"]}>Writers</span>
                                    <ul className={style["item-content-list"]}>
                                        {
                                            writers?.map((val, index) => {
                                                return (<>
                                                    <li key={index} className={style["item-content-list-item"]}>
                                                        <span key={index} className={style["specific-item-content"]}>{val}</span>
                                                    </li>

                                                </>)

                                            })

                                        }

                                    </ul>
                                </li>


                                <li className={style["credits-list-item"]}>
                                    <span className={style["item-label"]}>Stars</span>
                                    <ul className={style["item-content-list"]}>
                                        {
                                            stars?.map((val, index) => {
                                                return (<>
                                                    <li key={index} className={style["item-content-list-item"]}>
                                                        <span key={index} className={style["specific-item-content"]}>{val}</span>
                                                    </li>

                                                </>)

                                            })

                                        }

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={style["modal-func"]}>
                    <ConfirmBtn
                        className={style["modal-btn"]}
                        loading={loading}
                        onClick={handleClick}
                        text="我想看"
                    />


                </div>
            </div>



        </Modal>
    )
}

export default MovieModal;