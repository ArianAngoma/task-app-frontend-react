/* Importaciones propias */
import {types} from '../types/types';

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