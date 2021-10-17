import {useReducer} from 'react';

/* Importaciones propias */
import {taskReducer} from './taskReducer';
import {taskContext} from './taskContext';
import {TASKS_PROJECT} from '../../types';

const initialState = {
    tasks: [
        {name: 'Elegir plataforma', state: true, projectId: 1},
        {name: 'Cambiar cololres', state: true, projectId: 2},
        {name: 'Formas de pago', state: false, projectId: 3},
        {name: 'Elegir plataforma', state: true, projectId: 1},
        {name: 'Cambiar cololres', state: true, projectId: 2},
        {name: 'Formas de pago', state: false, projectId: 3},
        {name: 'Elegir plataforma', state: true, projectId: 1},
        {name: 'Cambiar cololres', state: true, projectId: 2},
        {name: 'Formas de pago', state: false, projectId: 3},
        {name: 'Elegir plataforma', state: true, projectId: 1},
        {name: 'Cambiar cololres', state: true, projectId: 2},
        {name: 'Formas de pago', state: false, projectId: 3}
    ]
}

export const TaskState = (props) => {
    /* Crear dispatch y state */
    const [state, dispatch] = useReducer(taskReducer, initialState);

    /* Acciones */
    /* Obtener tareas de un proyecto */
    const getTasks = (projectId) => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        });
    }

    return (
        <taskContext.Provider value={{
            tasks: state.tasks,
            getTasks
        }}>
            {props.children}
        </taskContext.Provider>
    )
}