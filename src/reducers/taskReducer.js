/* Importaciones propias */
import {types} from '../types/types';

/* Estado inicial */
const initialState = {
    tasksProject: [],
    activeTask: null
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Activar una tarea */
        case types.taskSetActive:
            return {
                ...state,
                activeTask: action.payload
            }
        /* Limpiar tarea activa */
        case types.taskClearActive:
            return {
                ...state,
                activeTask: null
            }
        /* Agregar nueva tarea */
        case types.taskAdded:
            return {
                ...state,
                tasksProject: [action.payload, ...state.tasksProject]
            }
        /* Actualizar tarea */
        case types.taskUpdated:
            return {
                ...state,
                tasksProject: state.tasksProject.map(task =>
                    (task.uid === action.payload.uid)
                        ? action.payload
                        : task
                )
            }
        /* Eliminar tarea */
        case types.taskDeleted:
            return {
                ...state,
                tasksProject: state.tasksProject.filter(state => state.uid !== action.payload)
            }
        /* Cargar tareas */
        case types.taskLoaded:
            return {
                ...state,
                tasksProject: [...action.payload]
            }
        /* Limpiar store de tareas */
        case types.taskLogout:
            return {
                ...initialState
            }
        default:
            return state;
    }
}