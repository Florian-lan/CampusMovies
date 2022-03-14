import {createStore, combineReducers} from 'redux';
import reducers from './reducers'

const initialMovieInfo = {
    movieInfo:{}
}
const store = createStore(
    combineReducers(reducers),

    // reduce函数的初始化state
    {
        MovieInfo:initialMovieInfo,
    
    }
)

export default store;
