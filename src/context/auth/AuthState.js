import {useReducer} from 'react';

/* Importaciones propias */
import {authReducer} from './authReducer';
import {authContext} from './authContext';

/* Token */
const token = localStorage.getItem('token');

/* Estado inicial */
const initialState = {
    token,
    authenticated: null,
    user: null,
    message: null
}

export const AuthState = (props) => {
    const [auth, dispatch] = useReducer(authReducer, initialState)
    return (
        <authContext.Provider value={{
            token: auth.token,
            authenticated: auth.authenticated,
            user: auth.user,
            message: auth.message
        }}>
            {props.children}
        </authContext.Provider>
    )
}