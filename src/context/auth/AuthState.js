import {useReducer} from 'react';

/* Importaciones propias */
import {authReducer} from './authReducer';
import {authContext} from './authContext';
import {LOGIN_ERROR, REGISTER_ERROR, REGISTER_SUCCESSFUL} from '../../types';
import {clientAxios} from '../../config/axios';

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
    const [auth, dispatch] = useReducer(authReducer, initialState);

    /* Acciones */
    /* Registrar un usuario */
    const registerUser = async (user) => {
        try {
            const resp = await clientAxios.post('/auth ', user);
            // console.log(resp);
            dispatch({
                type: REGISTER_SUCCESSFUL,
                payload: resp.data
            });
        } catch (e) {
            // console.log(e.response.data.errors);
            e.response.data.errors.map(error => {
                const alert = {
                    msg: error.msg,
                    category: 'alert-error'
                }

                return dispatch({
                    type: REGISTER_ERROR,
                    payload: alert
                });
            });
        }
    }

    return (
        <authContext.Provider value={{
            token: auth.token,
            authenticated: auth.authenticated,
            user: auth.user,
            message: auth.message,
            registerUser
        }}>
            {props.children}
        </authContext.Provider>
    )
}