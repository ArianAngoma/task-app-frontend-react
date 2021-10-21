/* Importaciones propias */
import {fetchNoToken, fetchWithToken} from '../helpers/fetch';
import {types} from '../types/types';
import {saveData} from '../helpers/save-data';

/* Inicio de sesión - comienzo */
export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await fetchNoToken('auth/sign-in', {email, password}, 'POST');
        const data = await resp.json();
        // console.log(data);

        await saveData(data, dispatch);
    }
}

/* Inicio de sesión */
export const authLogin = (user) => ({
    type: types.authLogin,
    payload: user
});

/* Validar Token */
export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchWithToken('auth/renew-token');
        const data = await resp.json();
        // console.log(data);

        if (data.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            /* Inicio de sesión */
            dispatch(authLogin(data.user));
        } else {
            dispatch(authCheckingFinish());
        }
    }
}

/* Finaliza la carga si el usuario ya esta logueado */
export const authCheckingFinish = () => ({
    type: types.authCheckingFinish
});
