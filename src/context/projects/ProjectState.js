import {useReducer} from 'react';

/* Importaciones propias */
import {projectReducer} from './projectReducer';
import {projectContext} from './projectContext';
import {FORM_PROJECT} from '../../types';

/* State inicial */
const initialState = {
    form: false,
    projects: [
        {id: 1, name: 'Tienda virtual'},
        {id: 2, name: 'Intranet'},
        {id: 3, name: 'Web'}
    ]
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

    return (
        <projectContext.Provider value={
            {
                form: project.form,
                projects: project.projects,
                showForm
            }
        }>
            {props.children}
        </projectContext.Provider>
    )
}