import {profileAPI} from '../components/api/api';
import {setIsFetching} from './authReducer';

let SEND_POST = 'profile/SEND_POST';
let SET_PROFILE = 'profile/SET_PROFILE';
let SET_STATUS = 'profile/SET_STATUS';
let SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
let WRONG_DATA_AVA = 'profile/WRONG_DATA_AVA';
let WRONG_DATA_PROFILE = 'profile/WRONG_DATA_PROFILE';
let INCREMENT_LIKE = 'profile/INCREMENT_LIKE';

let initialState = {
    profile: {
        fullName: null,
        photos: {
            small: null,
            large: null
        },
        aboutMe: null,
        contacts: {
            facebook: null,
            github: null,
            instagram: null,
            mainLink: null,
            twitter: null,
            vk: null,
            website: null,
            youtube: null
        },
        lookingForAJob: null,
        lookingForAJobDescription: null
    },
    posts: [
        {id: 0, postMessage: 'I learning JS...', likesCount: 12},
        {id: 1, postMessage: 'HTML!', likesCount: 9},
        {id: 2, postMessage: 'CSS', likesCount: 7},
        {id: 3, postMessage: 'React', likesCount: 5},
        {id: 4, postMessage: 'redux', likesCount: 4},
        {id: 5, postMessage: 'TypeScript and React Native will be learn', likesCount: 1}
    ],
    status: '',
    wrongData: null
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_POST:
            let newPost = {id: state.posts.length, postMessage: action.post, likesCount: 0};
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: {...action.data}
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: {...state.profile.photos, large: action.file}}
            }
        case WRONG_DATA_AVA:
            return {
                ...state,
                wrongDataAva: action.error
            }
        case WRONG_DATA_PROFILE:
            return {
                ...state,
                wrongDataProfile: action.error
            }
        case INCREMENT_LIKE:
            state = {...state};
            state.posts = [...state.posts];
            state.posts[action.id] = {...state.posts[action.id], likesCount: state.posts[action.id].likesCount+1 }
            return state
        default:
            return state
    }
}

export let sendPost = (post) => ({type: SEND_POST, post});
export let setProfile = (data) => ({type: SET_PROFILE, data});
export let setStatus = (status) => ({type: SET_STATUS, status});
export let savePhotoSuccess = (file) => ({type: SAVE_PHOTO_SUCCESS, file});
export let wrongDataAva = (error) => ({type: WRONG_DATA_AVA, error});
export let wrongDataProfile = (error) => ({type: WRONG_DATA_PROFILE, error});
export let incrementLike = (id) => ({type: INCREMENT_LIKE, id});

export const getProfileAndStatusThunk = (userId) => async (dispatch) => {
        dispatch(setIsFetching(true));
        let promise1 = await profileAPI.getProfile(userId);
        dispatch(setProfile(promise1.data));

        let promise2 = await profileAPI.getStatus(userId);
        dispatch(setStatus(promise2.data))

        await Promise.all([promise1, promise2]);
        dispatch(setIsFetching(false))
}

export const updateStatusThunk = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    dispatch(setIsFetching(true));
    let response = await profileAPI.savePhoto(file);
    dispatch(setIsFetching(false));
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos.large));
    } else {
        dispatch(wrongDataAva(response.data.messages[0]));
        setTimeout(() => {
            dispatch(wrongDataAva(null))
        }, 3000)
    }
}

export const saveProfile = (values) => async (dispatch, getState) => {
    dispatch(setIsFetching(true));
    let response = await profileAPI.saveProfile(values);
    dispatch(setIsFetching(false));
    if (response.data.resultCode === 0) {
        const userId = getState().auth.id;
        dispatch(getProfileAndStatusThunk(userId));
    } else {
        dispatch(wrongDataProfile(response.data.messages[0]));
        setTimeout(() => {
            dispatch(wrongDataProfile(null))
        }, 3000)
    }
}

export default profileReducer;