/* Importaciones propia */
import {ADD_TASK, DELETE_TASK, STATE_TASK, TASK_ACTIVE, TASKS_PROJECT, VALIDATE_TASK} from '../../types';

export const taskReducer = (state, action) => {
    switch (action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                tasksProject: state.tasks.filter(task => task.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                tasksProject: [action.payload, ...state.tasksProject],
                errorTask: false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                errorTask: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(state => state.id !== action.payload),
                tasksProject: state.tasksProject.filter(state => state.id !== action.payload)
            }
        case STATE_TASK:
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
        case TASK_ACTIVE:
            return {
                ...state,
                taskSelected: action.payload
            }
        default:
            return state;
    }
}