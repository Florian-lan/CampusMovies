import { legacy_createStore as createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './userStore/reducer'
import movieReducer from './movieStore/reducers'
const { MovieInfo, DetailsId, CollectionInfo, PurchasedInfo } = movieReducer

const initialMovieInfo = {
    movieInfo: {}
}
const initUserInfo = {
    user_name: '',
    password: ''
}
// 创建saga中间件
const sagaMiddleware = createSagaMiddleware()
// store 创建仓库，存放所有的reducer
// 由dispatch发送action，store进行遍历所有的reducer找到对应这个action的处理代码
// createStore(reducer, initState, middleware)
const store = createStore(
    combineReducers({
        MovieInfo, DetailsId, CollectionInfo, PurchasedInfo,
        userReducer,
    }),
    // reduce函数的初始化state
    {
        MovieInfo: initialMovieInfo,
        DetailsId: 0,
        CollectionInfo: [],
        // LikeStatus:false,
        PurchasedInfo: [],
        userReducer: initUserInfo,
    },
    // 在store中应用中间件
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
// 运行saga中间件，开始监听action
sagaMiddleware.run(rootSaga)
export default store;
