/* Importaciones propias */
import {fetchNoToken} from '../helpers/fetch';
import {types} from '../types/types';
import {saveData} from '../helpers/save-data';

/* Inicio de sesión */
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
