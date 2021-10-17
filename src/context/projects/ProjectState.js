import {useReducer} from 'react';

/* Importaciones propias */
import {projectReducer} from './projectReducer';
import {projectContext} from './projectContext';

/* State inicial */
const initialState = {
    form: false
}

export const ProjectState = (props) => {
    /* Dispatch para ejecutar las acciones */
    const [project, setProject] = useReducer(projectReducer, initialState);

    return (
        <projectContext.Provider value={
            {
                form: project.form
            }
        }>
            {props.children}
        </projectContext.Provider>
    )
}