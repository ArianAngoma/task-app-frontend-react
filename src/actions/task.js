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

/* Obtener tareas de un proyecto */
export const taskGetByProject = (projectId) => ({
    type: types.taskGetByProject,
    payload: projectId
});

/* Cambiar estado de la tarea */
export const taskChangeState = (task) => ({
    type: types.taskChangeState,
    payload: task
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
