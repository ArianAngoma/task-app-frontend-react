/* Importaciones propias */
import {types} from '../types/types';

/* Activar proyecto */
export const projectSetActive = (project) => ({
    type: types.projectSetActive,
    payload: project
});

/* Limpiar proyecto activo */
export const projectClearActive = () => ({
    type: types.projectClearActive
});

/* Agregar nuevo proyecto */
export const projectAdded = (project) => ({
    type: types.projectAdded,
    payload: project
});

/* Eliminar proyecto */
export const projectDeleted = () => ({
    type: types.projectDeleted
});