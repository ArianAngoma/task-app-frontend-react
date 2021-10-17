import {useReducer} from 'react';

/* Importaciones propias */
import {projectReducer} from './projectReducer';
import {projectContext} from './projectContext';
import {FORM_PROJECT} from '../../types';

/* State inicial */
const initialState = {
    form: false
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
                showForm
            }
        }>
            {props.children}
        </projectContext.Provider>
    )
}