export const getIsFetching = (state) => {
    return state.auth.isFetching
}
export const getIsAuth = (state) => {
    return state.auth.isAuth
}
export const getWrongData = (state) => {
    return state.auth.wrongData
}
export const getCaptchaUrl = (state) => {
    return state.auth.captchaUrl
}
export const getId = (state) => {
    return state.auth.id
}