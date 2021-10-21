/* Importaciones propias */
import {types} from '../types/types';

/* Estado inicial */
const initialState = {
    alertOpen: false,
    alert: null
}

export const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Abrir alerta */
        case types.alertOpen:
            return {
                ...state,
                alertOpen: true,
                alert: {...action.payload}
            }
        /* Cerrar alerta */
        case types.alertClose:
            return {
                alertOpen: false,
                alert: null
            }
        default:
            return state;
    }
}