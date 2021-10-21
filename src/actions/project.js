/* Importaciones propias */
import {types} from '../types/types';
import {fetchWithToken} from '../helpers/fetch';

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

/* Agregar nuevo proyecto - comienzo */
export const projectStartAdd = (project) => {
    return async (dispatch) => {
        // console.log(project);
        try {
            const resp = await fetchWithToken('project', project, 'POST');
            const data = await resp.json();
            // console.log(data);

            if (data.ok) return dispatch(projectAdded(project));
        } catch (e) {
            console.log(e);
        }
    }
}