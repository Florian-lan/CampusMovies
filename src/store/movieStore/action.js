export const SET_MOVIE_INFO = "SET_MOVIE_INFO";
export const SET_DETAILS_ID = "SET_DETAILS_ID";
export const ADD_COLLECTION = "ADD_COLLECTION";
export const REMOVE_COLLECTION = "REMOVE_COLLECTION";
export const SET_COLLECTION = "SET_COLLECTION";
// export const SET_LIKE_STATUS = "SET_LIKE_STATUS";
export const SET_PURCHASED = "SET_PURCHASED";
export const ADD_PURCHASED = "ADD_PURCHASED";
export const REMOVE_PURCHASED = "REMOVE_PURCHASED";


// action creator 返回一个action对象
// 传入要修改的state，在reducer中进行修改
export const setMovieInfo = (movieInfo) => {
    return {
        type: SET_MOVIE_INFO,
        payload: movieInfo
    }
}

export const setDetailsId = (detailsId) => {
    return {
        type: SET_DETAILS_ID,
        payload: detailsId
    }
}
// 关于是否喜欢
// export const setLikeStatus = (likeStatus) => {
//     return {
//         type: SET_LIKE_STATUS,
//         payload: likeStatus
//     }
// }

// 关于collection的action
// collectionInfo 是movieInfo类型
export const setCollectionInfo = (collectionInfo) => {
    return {
        type: SET_COLLECTION,
        payload: collectionInfo
    }
}
export const addCollectionInfo = (collectionInfo) => {
    return {
        type: ADD_COLLECTION,
        payload: collectionInfo

    }
}

export const removeCollectionInfo = (collectionInfo) => {
    return {
        type: REMOVE_COLLECTION,
        payload: collectionInfo
    }
}



// 关于purchased的action
export const setPurchasedInfo = (purchasedInfo) =>{
    return{
        type: SET_PURCHASED,
        payload:purchasedInfo
    }
}

export const addPurchasedInfo = (purchasedInfo) =>{
    return{
        type: ADD_PURCHASED,
        payload: purchasedInfo
    }
}

export const removePurchasedInfo = (purchasedInfo) =>{
    return {
        type: REMOVE_PURCHASED,
        payload: purchasedInfo
    }
}

