import {useReducer} from 'react';

/* Importaciones propias */
import {alertContext} from './alertContext';
import {alertReducer} from './alertReducer';
import {CLEAR_ALERT, SHOW_ALERT} from '../../types';

const initialState = {
    alert: null
}

export const AlertState = (props) => {
    const [alert, dispatch] = useReducer(alertReducer, initialState);

    /* Acciones */
    /* Mostrar alerta */
    const showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg, category
            }
        });

        setTimeout(() => {
            dispatch({
                type: CLEAR_ALERT
            })
        }, 5000);
    }

    return (
        <alertContext.Provider value={{
            alert: alert.alert,
            showAlert
        }}>
            {props.children}
        </alertContext.Provider>
    )
}