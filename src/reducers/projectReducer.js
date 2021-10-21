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
                projects: state.projects.filter(project => (project.uid !== state.activeProject.uid)),
                activeProject: null
            }
        /* Cargar proyectos */
        case types.projectLoaded:
            return {
                ...state,
                projects: [...action.payload]
            }
        /* Limpiar store de proyectos */
        case types.projectLogout:
            return {
                ...initialState
            }
        default:
            return state;
    }
}