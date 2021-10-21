/* Importaciones propias */
import {types} from '../types/types';

/* Estado inicial */
const initialState = {
    checking: true,
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Guardar usuario en el store */
        case types.authLogin:
            return {
                ...state,
                checking: false,
                user: {...action.payload}
            }
        /* Cambiar store auth en finalizado si el usuario esta logueado */
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        /* Logout de usuario */
        case types.authLogout:
            return {
                checking: false
            }
        default:
            return state;
    }
}