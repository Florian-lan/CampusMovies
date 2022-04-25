import {takeEvery} from 'redux-saga/effects'
import { login } from './userStore/saga'
import{
    LOGIN,
    REGISTER
} from './userStore/action'

// 监听所有含副作用的action
export default function* rootSaga(){
    yield takeEvery(LOGIN,login)
}
