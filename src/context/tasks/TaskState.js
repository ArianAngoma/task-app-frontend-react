import {useReducer} from 'react';

/* Importaciones propias */
import {taskReducer} from './taskReducer';
import {taskContext} from './taskContext';

const initialState = {
    tasks: []
}

export const TaskState = (props) => {
    /* Crear dispatch y state */
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <taskContext.Provider value={state}>
            {props.children}
        </taskContext.Provider>
    )
}