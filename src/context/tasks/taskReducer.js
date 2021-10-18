/* Importaciones propia */
import {ADD_TASK, TASKS_PROJECT} from '../../types';

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
                task: [...state.tasks, action.payload]
            }
        default:
            return state;
    }
}