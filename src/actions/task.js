/* Importaciones propias */
import {types} from '../types/types';
import {fetchWithToken} from '../helpers/fetch';
import {showAlert} from './alert';

/* Activar tarea */
export const taskSetActive = (task) => ({
    type: types.taskSetActive,
    payload: task
});

/* Limpiar tarea activa */
export const taskClearActive = () => ({
    type: types.taskClearActive
});

/* Agregar nueva tarea */
export const taskAdded = (task) => ({
    type: types.taskAdded,
    payload: task
});

/* Actualizar tarea */
export const taskUpdated = (task) => ({
    type: types.taskUpdated,
    payload: task
});

/* Obtener tareas */
export const taskLoaded = (tasks) => ({
    type: types.taskLoaded,
    payload: tasks
});

/* Eliminar tarea */
export const taskDeleted = (taskId) => ({
    type: types.taskDeleted,
    payload: taskId
});

/* Agregar nueva tarea - comienzo */
export const taskStartAdd = (task) => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken('task', task, 'POST');
            const data = await resp.json();

            if (data.ok) {
                task.uid = data.task.uid;
                task.state = data.task.status;

                return dispatch(taskAdded(task));
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

/* Obtener tareas - comienzo */
export const taskStartLoad = (projectId) => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken(`task/${projectId}`);
            const data = await resp.json();
            // console.log(data);
            if (data.ok) {
                return dispatch(taskLoaded(data.tasks));
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

/* Eliminar tarea - comienzo */
export const taskStartDelete = (taskId) => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken(`task/${taskId}`, {}, 'DELETE');
            const data = await resp.json();

            if (data.ok) return dispatch(taskDeleted(taskId));
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

/* Actualizar tarea - comienzo */
export const taskStartUpdate = (task) => {
    return async (dispatch) => {
        try {
            const resp = await fetchWithToken(`task/${task.uid}`, task, 'PUT');
            const data = await resp.json();

            if (data.ok) return dispatch(taskUpdated(task));
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