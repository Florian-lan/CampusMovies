import {
    LOGIN,
    LOGIN_SUC,
    REGISTER,
    SET_LOADING,
} from './action'

const initUserInfo = {
    user_name: "",
    password: "",
}
export default function userReducer(
    state = initUserInfo,
    action
) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUC:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }

}