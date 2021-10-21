/* Importaciones propias */
import {types} from '../types/types';
import {fetchWithToken} from '../helpers/fetch';
import {showAlert} from './alert';

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

                return dispatch(projectAdded(project))
            } else {
                if (data.msg) {
                    return dispatch(showAlert(data.msg, 'alert-error'));
                } else {
                    return dispatch(showAlert(data.errors[0].msg, 'alert-error'));
                }
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

            if (data.ok) {
                return dispatch(projectLoaded(data.projects));
            } else {
                if (data.msg) {
                    return dispatch(showAlert(data.msg, 'alert-error'));
                } else {
                    return dispatch(showAlert(data.errors[0].msg, 'alert-error'));
                }
            }
        } catch (e) {
            console.log(e);
        }
    }
}

/* Eliminar proyecto - comienzo */
export const projectStartDelete = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().project.activeProject;
        // console.log(uid);

        try {
            const resp = await fetchWithToken(`project/${uid}`, {}, 'DELETE');
            const data = await resp.json();
            // console.log(data);
            if (data.ok) return dispatch(projectDeleted());
            else {
                if (data.msg) {
                    return dispatch(showAlert(data.msg, 'alert-error'));
                } else {
                    return dispatch(showAlert(data.errors[0].msg, 'alert-error'));
                }
            }
        } catch (e) {
            console.log(e);
        }
    }
}

/* Limpiar store de proyectos */
export const projectLogout = () => ({
    type: types.projectLogout
});