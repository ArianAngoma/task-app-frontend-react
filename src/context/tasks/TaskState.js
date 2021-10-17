import {useReducer} from 'react';

/* Importaciones propias */
import {taskReducer} from './taskReducer';
import {taskContext} from './taskContext';

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

    return (
        <taskContext.Provider value={{
            tasks: state.tasks
        }}>
            {props.children}
        </taskContext.Provider>
    )
}