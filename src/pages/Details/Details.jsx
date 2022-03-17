import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import PriComments from '../../components/PriComments/PriComments'
import RateModal from '../../components/RateModal/RateModal'
import './style.scss'
import { useParams } from 'react-router-dom';
import { find } from "lodash"


const Details = () => {

    const [rateModalShow, setRateModalShow] = useState(false);

    // 这里取出的是字符串
    const { id } = useParams();
    const movieInfoList = useSelector((state) => {
        return state.MovieInfo;
    }).movies;

    // 引用lodash中的函数
    const movieInfoItem = find(movieInfoList, { "ID": id });
    console.log(movieInfoItem);
    const { auxiliary } = movieInfoItem;

    // 对象转化为数组
    let auxiliaryInfo = Object.values(auxiliary);
    // console.log(movieInfoItem);
    console.log(auxiliaryInfo)

    const handleRateClick = ()=>{
        console.log("tese");
        setRateModalShow(true);
    }


    // const detailsId = useSelector((state) =>{
    //     console.log(state);
    //     return state.DetailsId;
    // })
    // console.log(detailsId);

    return (
        <div className="details-wrapper">
            <div className="details-body">
                <div className="details-header">
                    <div className="header-title">
                        <h1 className="main">蝙蝠侠</h1>
                        <div className="auxiliary">
                            <ul className="auxiliary-list">
                                {auxiliaryInfo?.map((val, index) => {
                                    return (
                                        <li className="list-items" key={index} >
                                            {val}
                                        </li>
                                    )

                                })}

                            </ul>
                        </div>

                    </div>
                    <div className="header-rate">
                        <div className="aggregate-rating">
                            <div className="rating-title">CM RATING</div>
                            <a href="#" className="rating-box">
                                <div className="rating-box-content">
                                    <div className="rating-box-content-star">
                                        <img src="/image/star-concrete.svg" alt="rating-star-concrete" />
                                    </div>
                                    <div className="rating-box-content-number">
                                        <span className="number">8.6</span>
                                        <span className='number2'>/10</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="user-rating">
                            <div className="rating-title">YOUR RATING</div>
                            <a href="#" className="rating-box" onClick={handleRateClick}>
                                <div className="rating-box-content">
                                    <div className="rating-box-content-star">
                                        <img src="/image/star.svg" alt="rating-star" />
                                    </div>
                                    <div className="rating-box-content-text">Rate</div>
                                </div>
                            </a>


                        </div>
                    </div>
                </div>
                <div className="body-comments">
                    <PriComments />
                </div>


            </div>
            <RateModal rateModalShow={rateModalShow} setRateModalShow={setRateModalShow} wrapClassName="standardModal" />

        </div>


    )
}

export default Details;
