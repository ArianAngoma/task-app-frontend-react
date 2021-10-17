import {ACTUAL_PROJECT, ADD_PROJECT, DELETE_PROJECT, FORM_PROJECT, GET_PROJECTS, VALIDATE_FORM} from '../../types';

export const projectReducer = (state, action) => {
    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false,
                errorForm: false
            }
        case VALIDATE_FORM:
            return {
                ...state,
                errorForm: true
            }
        case ACTUAL_PROJECT:
            return {
                ...state,
                project: state.projects.find(project => project.id === action.payload.id)
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload),
                project: null
            }
        default:
            return state;
    }
}