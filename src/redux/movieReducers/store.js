import {createStore, combineReducers} from 'redux';
import reducers from './reducers'

const initialMovieInfo = {
    movieInfo:{}
}

// store 创建仓库，存放所有的reducer
// 由dispatch发送action，store进行遍历所有的reducer找到对应这个action的处理代码
const store = createStore(
    combineReducers(reducers),

    // reduce函数的初始化state
    {
        MovieInfo:initialMovieInfo,
        DetailsId:0,
    
    }
)

export default store;
