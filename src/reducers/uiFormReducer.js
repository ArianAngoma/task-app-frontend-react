/* Importaciones propias */
import {types} from '../types/types';

/* Estado inicial */
const initialState = {
    openFormProject: false,

    errorFormProject: false,
    errorFormTask: false
}

export const uiFormReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Abrir formulario */
        case types.uiOpenFormProject:
            return {
                ...state,
                openFormProject: true
            }
        /* Cerrar formulario */
        case types.uiCloseFormProject:
            return {
                ...state,
                openFormProject: false
            }
        /* Abrir error del formulario de proyecto */
        case types.uiOpenErrorProject : {
            return {
                ...state,
                errorFormProject: true
            }
        }
        /* Cerrar error del formulario de proyecto */
        case types.uiCloseErrorProject:
            return {
                ...state,
                errorFormProject: false
            }
        /* Abrir error del formulario de tarea */
        case types.uiOpenErrorTask : {
            return {
                ...state,
                errorFormTask: true
            }
        }
        /* Cerrar error del formulario de tarea */
        case types.uiCloseErrorTask:
            return {
                ...state,
                errorFormTask: false
            }
        default:
            return state;
    }
}