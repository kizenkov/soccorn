const SET_ACTIVE_NAME_DIALOGS = 'dialogs/SET_ACTIVE_NAME_DIALOGS';
const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

let initialState = {
    dialogs: {
        Ann: [
            {id:1, whoWrite: 'Ann', dialogMessage: 'Hello!'},
            {id:2, whoWrite: 'me', dialogMessage: 'Hi!'},
            {id:3, whoWrite: 'Ann', dialogMessage: 'How your js?'},
            {id:4, whoWrite: 'me', dialogMessage: 'so baaad....'},
            {id:5, whoWrite: 'Ann', dialogMessage: 'ah...'}
        ],
        Pete: [
            {id:1, whoWrite: 'Pete', dialogMessage: 'Hello!'},
            {id:2, whoWrite: 'me', dialogMessage: 'Hi!'},
        ],
        John: [
            {id:1, whoWrite: 'John', dialogMessage: 'Hello!'},
            {id:2, whoWrite: 'me', dialogMessage: 'Hi!'},
            {id:3, whoWrite: 'John', dialogMessage: 'How your js?'},
            {id:4, whoWrite: 'me', dialogMessage: 'so baaad....'},
            {id:5, whoWrite: 'John', dialogMessage: 'ah...'},
            {id:6, whoWrite: 'me', dialogMessage: 'so baaad....'},
            {id:7, whoWrite: 'John', dialogMessage: 'ah...'}
        ]},
    activeNameDialogs: null,
}

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_NAME_DIALOGS:
            return {
                ...state,
                activeNameDialogs: action.name
            }
        case SEND_MESSAGE:
            return {
                ...state,
                dialogs: {...state.dialogs,
                    [action.user]: [...state.dialogs[action.user], {id: state.dialogs[action.user].length + 1, whoWrite: 'me', dialogMessage: action.message}]},
            }
        default:
            return state
    }
}

export const setActiveNameDialogs = (name) => ({type: SET_ACTIVE_NAME_DIALOGS, name})
export const sendMessage = (message, user) => ({type: SEND_MESSAGE, message, user})

export default dialogsReducer;