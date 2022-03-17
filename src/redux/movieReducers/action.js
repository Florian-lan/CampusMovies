export const SET_MOVIE_INFO = "SET_MOVIE_INFO";
export const SET_DETAILS_ID = "SET_DETAILS_ID";


// action creator 返回一个action对象
// 传入要修改的state，在reducer中进行修改
export const setMovieInfo = (movieInfo) => {
    return {
        type: SET_MOVIE_INFO,
        payload: movieInfo
    }
}

export const setDetailsId = (detailsId) =>{
    return{
        type:SET_DETAILS_ID,
        payload: detailsId
    }
}