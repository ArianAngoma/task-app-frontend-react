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

/* Obtener proyectos */
export const projectLoaded = (projects) => ({
    type: types.projectLoaded,
    payload: projects
});

/* Agregar nuevo proyecto - comienzo */
export const projectStartAdd = (project) => {
    return async (dispatch) => {
        // console.log(project);
        try {
            const resp = await fetchWithToken('project', project, 'POST');
            const data = await resp.json();
            // console.log(data);

            if (data.ok) {
                /* Se hace esto para que se añada al estore con los datos necesarios */
                project.creator = data.project.creator;
                project.created = data.project.created;
                project.uid = data.project.uid;

                dispatch(projectAdded(project))
            }
        } catch (e) {
            console.log(e);
        }
    }
}

/* Obtener proyectos - comienzo */
export const projectStartLoad = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken('project');
            const data = await resp.json();
            // console.log(data);

            dispatch(projectLoaded(data.projects));
        } catch (e) {
            console.log(e);
        }
    }
}