import { ActionTypes } from '../constants/action-types';

const initialState = {
    uid: "",
    name: "",
    phone: "",
    email: "",
    username: "",
    pofile_picture: ""
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER:
            return { ...state, ...payload }

        default:
            return state;
    }
}

