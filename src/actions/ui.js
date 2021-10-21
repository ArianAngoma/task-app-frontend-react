/* Importaciones propias */
import {types} from '../types/types';

/* Abrir formulario de proyecto */
export const uiOpenFormProject = () => ({
    type: types.uiOpenFormProject
});

/* Cerrar formulario de proyecto */
export const uiCloseFormProject = () => ({
    type: types.uiCloseFormProject
});

/* Mostrar error del formulario de proyecto */
export const uiOpenErrorProject = () => ({
    type: types.uiOpenErrorProject
});

/* Ocultar error del formulario de proyecto */
export const uiCloseErrorProject = () => ({
    type: types.uiCloseErrorProject
});

/* Mostrar error del formulario de tarea */
export const uiOpenErrorTask = () => ({
    type: types.uiOpenErrorTask
});

/* Ocultar error del formulario de tarea */
export const uiCloseErrorTask = () => ({
    type: types.uiCloseErrorTask
});