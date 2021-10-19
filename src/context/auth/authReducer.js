import {LOGIN_ERROR, LOGIN_SUCCESSFUL, REGISTER_ERROR, REGISTER_SUCCESSFUL} from '../../types';

export const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:
        case REGISTER_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                authenticated: true,
                user: action.payload.user,
                message: null
            }
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                message: action.payload
            }
        default:
            return state;
    }
}