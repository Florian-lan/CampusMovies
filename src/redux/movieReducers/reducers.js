import { SET_MOVIE_INFO } from "./action";

const initialMovieInfo = {
    movieInfo:{}
}

export default{
    // all reducer函数
    MovieInfo(state = initialMovieInfo, action){
        const {type, payload} = action;
        switch(type){
            case SET_MOVIE_INFO:
                return payload;
            default:
                return state;
        }

    },




}