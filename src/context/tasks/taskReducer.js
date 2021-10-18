/* Importaciones propia */
import {ADD_TASK, TASKS_PROJECT, VALIDATE_TASK} from '../../types';

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
                tasks: [...state.tasks, action.payload],
                tasksProject: [...state.tasksProject, action.payload],
                errorTask: false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                errorTask: true
            }
        default:
            return state;
    }
}