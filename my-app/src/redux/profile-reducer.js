import {profileAPI, usersAPI} from "../ api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, name: 'Joseph', message: 'smth clever text', likesCount: 16},
        {id: 2, name: 'Isaac', message: 'smth clever text about life', likesCount: 39}
    ],
    profile: null,
    status: '',
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, ({id: 5, name: 'smth', message: action.newPostText, likesCount: 0})],
            }
        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;

    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatusAC = (status) => ({type: SET_USER_STATUS, status});

export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatusAC(response.data));
        })
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatusAC(status));
                }
            })
    }
}

export default profileReducer