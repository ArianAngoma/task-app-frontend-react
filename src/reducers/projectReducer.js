/* Importaciones propias */
import {types} from '../types/types';

/* Estado inicial */
const initialState = {
    projects: [],
    activeProject: null
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        /* Activar proyecto */
        case types.projectSetActive:
            return {
                ...state,
                activeProject: action.payload
            }
        /* Limpiar proyecto activo */
        case types.projectClearActive:
            return {
                ...state,
                activeProject: null
            }
        /* Agregar nuevo proyecto */
        case types.projectAdded:
            return {
                ...state,
                projects: [
                    ...state.projects,
                    action.payload
                ]
            }
        /* Eliminar proyecto */
        case types.projectDeleted:
            return {
                ...state,
                projects: state.projects.filter(project => (project.id !== state.activeProject.id)),
                activeProject: null
            }
        /* Cargar proyectos */
        case types.projectLoaded:
            return {
                ...state,
                projects: [...action.payload]
            }
        default:
            return state;
    }
}