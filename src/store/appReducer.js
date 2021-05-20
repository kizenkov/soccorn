import React from 'react';
import {getAuthData} from './authReducer';

const SET_INITIALIZED = 'app/SET_INITIALIZED';
const SET_BACKGROUND_VIOLET = 'app/SET_BACKGROUND_VIOLET';
const SET_BACKGROUND_CORN = 'app/SET_BACKGROUND_CORN';
const SET_BACKGROUND_LIGHT = 'app/SET_BACKGROUND_LIGHT';

export const ThemeContext = React.createContext()

let initialState = {
    initialized: false,
    backgroundHeaderNavbar: 'black',
    backgroundContent: 'gold',
    backgroundButton: 'darkorange',
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        case SET_BACKGROUND_VIOLET:
            return {
                ...state,
                backgroundHeaderNavbar: 'grey',
                backgroundContent: 'pink',
                backgroundButton: 'violet'
            }
        case SET_BACKGROUND_CORN:
            return {
                ...state,
                backgroundHeaderNavbar: 'black',
                backgroundContent: 'gold',
                backgroundButton: 'darkorange'
            }
        case SET_BACKGROUND_LIGHT:
            return {
                ...state,
                backgroundHeaderNavbar: 'lightblue',
                backgroundContent: 'lightgray',
                backgroundButton: 'lightgray'
            }
        default:
            return state
    }
}

const setInitialized = () => ({type: SET_INITIALIZED});
export const setBackgroundViolet = () => ({type: SET_BACKGROUND_VIOLET});
export const setBackgroundCorn = () => ({type: SET_BACKGROUND_CORN});
export const setBackgroundLight = () => ({type: SET_BACKGROUND_LIGHT});

export const initializing = () => async (dispatch) => {
    await dispatch(getAuthData());
    dispatch(setInitialized())
}

export default appReducer;