/* Importaciones propias */
import {CLEAR_ALERT, SHOW_ALERT} from '../../types';

export const alertReducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case CLEAR_ALERT:
            return {
                ...state,
                alert: null
            }
        default:
            return state;
    }
}