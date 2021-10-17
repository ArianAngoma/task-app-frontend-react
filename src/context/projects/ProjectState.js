import {useReducer} from 'react';
import {v4 as uuidv4} from 'uuid';

/* Importaciones propias */
import {projectReducer} from './projectReducer';
import {projectContext} from './projectContext';
import {ADD_PROJECT, FORM_PROJECT, GET_PROJECTS, VALIDATE_FORM} from '../../types';

/* State inicial */
const initialState = {
    form: false,
    projects: [
        {id: 1, name: 'Tienda virtual'},
        {id: 2, name: 'Intranet'},
        {id: 3, name: 'Web'}
    ],
    errorForm: false
}

export const ProjectState = (props) => {
    /* Dispatch para ejecutar las acciones */
    const [project, dispatch] = useReducer(projectReducer, initialState);

    /* Acciones */
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        });
    }

    /* Obtener proyectos */
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: initialState.projects
        });
    }

    /* Agregar nuevo proyecto */
    const addNewProject = (project) => {
        project.id = uuidv4();

        /* Insertar proyecto al state */
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    /* Valida el formulario */
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    return (
        <projectContext.Provider value={
            {
                form: project.form,
                projects: project.projects,
                errorForm: project.errorForm,
                showForm,
                getProjects,
                addNewProject,
                showError
            }
        }>
            {props.children}
        </projectContext.Provider>
    )
}