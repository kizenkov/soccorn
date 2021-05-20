import {usersAPI} from '../components/api/api';
import {setIsFetching} from './authReducer';
import {mapingItems} from '../common/helpers';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_DISABLED = 'users/SET_DISABLED';
const SET_UNDISABLED = 'users/SET_UNDISABLED';

let initialState = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isDisable: []
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: mapingItems(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: mapingItems(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_DISABLED:
            return {
                ...state,
                isDisable: [...state.isDisable, action.userId]
            }
        case SET_UNDISABLED:
            return {
                ...state,
                isDisable: state.isDisable.filter(el => el !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage = 1) => ({type: SET_CURRENT_PAGE, currentPage});
export const setDisabled = (userId) => ({type: SET_DISABLED, userId});
export const setUndisabled = (userId) => ({type: SET_UNDISABLED, userId});

export const getUsersThunk = (page, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    let response = await usersAPI.getUsers(page, pageSize);
    dispatch(setUsers(response.data.items));
    dispatch(setTotalCount(response.data.totalCount));
    dispatch(setCurrentPage(page));
    dispatch(setIsFetching(false));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setDisabled(userId));
    let response = await apiMethod(userId);
    dispatch(setUndisabled(userId));
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
}

export const followThunk = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow, follow)
}

export const unfollowThunk = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollow)
}

export default usersReducer;