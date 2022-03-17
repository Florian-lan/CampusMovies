import {
    SET_MOVIE_INFO,
    SET_DETAILS_ID
} from "./action";

const initialMovieInfo = {
    movieInfo: {}
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
    }





}