/* Importaciones propias */
import {types} from '../types/types';

/* Estado inicial */
const initialState = {
    tasks: [
        {id: 1, name: 'Elegir plataforma', state: true, projectId: 1},
        {id: 2, name: 'Cambiar cololres', state: true, projectId: 2},
        {id: 3, name: 'Formas de pago', state: false, projectId: 3},
        {id: 4, name: 'Elegir plataforma', state: true, projectId: 1},
        {id: 5, name: 'Cambiar cololres', state: true, projectId: 2},
        {id: 6, name: 'Formas de pago', state: false, projectId: 3},
        {id: 7, name: 'Elegir plataforma', state: true, projectId: 1},
        {id: 8, name: 'Cambiar cololres', state: true, projectId: 2},
        {id: 9, name: 'Formas de pago', state: false, projectId: 3},
        {id: 10, name: 'Elegir plataforma', state: true, projectId: 1},
        {id: 11, name: 'Cambiar cololres', state: true, projectId: 2},
        {id: 12, name: 'Formas de pago', state: false, projectId: 3}
    ],
    tasksProject: [],
    activeTask: null
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Obtener tareas por proyecto */
        case types.taskGetByProject:
            return {
                ...state,
                tasksProject: state.tasks.filter(task => task.projectId === action.payload)
            }
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
        /* Cambiar estado de la tarea */
        case types.taskChangeState:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    (task.id === action.payload.id)
                        ? action.payload
                        : task
                ),
                tasksProject: state.tasksProject.map(task =>
                    (task.id === action.payload.id)
                        ? action.payload
                        : task
                )
            }
        /* Agregar nueva tarea */
        case types.taskAdded:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                tasksProject: [action.payload, ...state.tasksProject]
            }
        /* Actualizar tarea */
        case types.taskUpdated:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    (task.id === action.payload.id)
                        ? action.payload
                        : task
                ),
                tasksProject: state.tasksProject.map(task =>
                    (task.id === action.payload.id)
                        ? action.payload
                        : task
                )
            }
        /* Eliminar tarea */
        case types.taskDeleted:
            return {
                ...state,
                tasks: state.tasks.filter(state => state.id !== action.payload),
                tasksProject: state.tasksProject.filter(state => state.id !== action.payload)
            }
        default:
            return state;
    }
}