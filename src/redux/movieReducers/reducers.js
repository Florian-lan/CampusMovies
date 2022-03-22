import { findIndex } from "lodash";
import {
    SET_MOVIE_INFO,
    SET_DETAILS_ID,
    SET_COLLECTION,
    ADD_COLLECTION,
    REMOVE_COLLECTION,
    SET_LIKE_STATUS,
    SET_PURCHASED,
    ADD_PURCHASED,
    REMOVE_PURCHASED
} from "./action";

const initialMovieInfo = {
    movieInfo: {}
}
const initialCollectionInfoList = {
    collectionInfoList: []
}


const initialPurchasedInfoList = {
    purchasedInfoList : [
        {
                movie: {},
                day:"",
                time: "",
                theater: ""
        }
    ]
}

// reducer函数，封装修改state的核心逻辑，
// 传入旧的state和action
// 返回修改之后的state

export default {
    // all reducer函数
    MovieInfo(state = initialMovieInfo, action) {
        const { type, payload } = action;
        switch (type) {
            case SET_MOVIE_INFO:
                return payload;
            default:
                return state;
        }

    },
    DetailsId(state = 0, action) {
        const { type, payload } = action;

        switch (type) {
            case SET_DETAILS_ID:
                console.log(payload);
                return payload;
            default:
                return state;
        }
    },

    // // likeStatus
    // LikeStatus(state = initialLikeStatus, action) {
    //     const {type,payload} = action;
    //     switch(type){
    //         case SET_LIKE_STATUS:
    //             return payload;
    //         default:
    //             return state;
    //     }
    // },
    // 我喜欢，加入/移出收藏操作
    CollectionInfo(state = initialCollectionInfoList, action) {
        const{ type, payload} = action;
        switch(type) {
            case SET_COLLECTION:
                state.collectionInfoList = payload;
                return { ... state }
            case ADD_COLLECTION:
                // console.log(payload);
                // console.log(state.collectionInfoList)
                const indexExist = findIndex(state.collectionInfoList,{ID:payload.ID});
                // console.log(indexExist)
                if(indexExist === -1){
                    state.collectionInfoList.push(payload);
                    localStorage.setItem("collectionInfo",JSON.stringify(state.collectionInfoList));
                }
                return {...state}
            case REMOVE_COLLECTION:
                const movieInfoIndex = findIndex(state.collectionInfoList,{ID:payload.ID});
                state.collectionInfoList.splice(movieInfoIndex,1);
                localStorage.setItem("collectionInfo",JSON.stringify(state.collectionInfoList));
                return {...state}
            default:
                return state;

        }

    },


    // 预定/购买操作
    // action的payload传过来的是一个对象，state是一个大的对象，里面维护一个对象数组purchasedInfoList
    PurchasedInfo(state = initialPurchasedInfoList, action) {
        const {type, payload} = action;
        switch(type) {
            case SET_PURCHASED:
                // 初始化的时候，payload传过来就是一个空数组
                state.purchasedInfoList = payload;
                return {...state};
            case ADD_PURCHASED:
                const indexExist = findIndex(state.purchasedInfoList, function(temp){return temp.movie.ID==payload.movie.ID})
                if(indexExist == -1){
                    state.purchasedInfoList.push(payload);
                    localStorage.setItem("purchasedInfo",JSON.stringify(state.purchasedInfoList));
                    state.purchasedInfoList = [...state.purchasedInfoList];
                }
                return {...state};

            case REMOVE_PURCHASED:
                const indexExist_remove = findIndex(state.purchasedInfoList,function(temp){return temp.movie.ID==payload.movie.ID});
                if(indexExist_remove != -1){
                    state.purchasedInfoList.splice(indexExist_remove,1);
                    localStorage.setItem("purchasedInfo",JSON.stringify(state.purchasedInfoList));
                }
                return {...state};

            default:
                return state;
                



        }
    }






}