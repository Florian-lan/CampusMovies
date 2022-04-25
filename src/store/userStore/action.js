export const LOGIN = 'LOGIN'
export const LOGIN_SUC = "LOGIN_SUC"
export const REGISTER = 'REGISTER'
export const SET_LOADING = "SET_LOADING"

export const login = (loginInfo) => ({
    type: LOGIN,
    payload: loginInfo,
})

export const register = (registerInfo) => ({
    type: REGISTER,
    payload: registerInfo
})

// loading: boolean
// TODO: 完成具体setLoading的实现，在saga中处理成功或失败的action
export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: { loading },
})