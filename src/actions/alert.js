/* Importaciones propias */
import {types} from '../types/types';

/* Abrir alerta */
export const alertOpen = (msg, category) => ({
    type: types.alertOpen,
    payload: {
        msg, category
    }
});

/* Cerrar alerta */
export const alertClose = () => ({
    type: types.alertClose
});

/* Mostrar alerta y cerrarla */
export const showAlert = (msg, category) => {
    return (dispatch) => {
        dispatch(alertOpen(msg, category));

        setTimeout(() => {
            dispatch(alertClose())
        }, 5000);
    }
}