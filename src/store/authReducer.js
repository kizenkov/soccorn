import {profileAPI, securityAPI} from '../components/api/api';

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const LOGOUT = 'auth/LOGOUT';
const LOGIN = 'auth/LOGIN';
const SET_IS_FETCHING = 'auth/SET_IS_FETCHING';
const WRONG_DATA = 'auth/WRONG_DATA';
const SET_CAPTCHA_URL = 'app/SET_CAPTCHA_URL';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    wrongData: false,
    captchaUrl: ''
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }
        case LOGIN:
            return {
                ...state,
                isAuth: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case WRONG_DATA:
            return {
                ...state,
                wrongData: action.wrongData
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state
    }
}

export const setAuthData = (data) => ({type: SET_AUTH_DATA, data});
export const logout = () => ({type: LOGOUT});
export const login = () => ({type: LOGIN});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const wrongData = (wrongData) => ({type: WRONG_DATA, wrongData});
const setCaptchaUrl = (url) => ({type: SET_CAPTCHA_URL, url});

export const getAuthData = () => async (dispatch) => {
    let response = await profileAPI.authMe();
    if (response.data.resultCode === 0) {
        dispatch(setAuthData(response.data.data));
    }
}

export const logined = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await profileAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthData());
        dispatch(setCaptchaUrl(null));
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha());
            return
        }
        dispatch(wrongData(response.data.messages[0]));
        setTimeout(() => {
            dispatch(wrongData(null));
        }, 1000);
    }
}

export const logouted = () => async (dispatch) => {
    let response = await profileAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(logout());
    }
}

const getCaptcha = () => async (dispatch) => {
    let response = await securityAPI.getCaptcha();
    if (response.data.url) {
        dispatch(setCaptchaUrl(response.data.url));
    }
}

export default authReducer;