import {useReducer} from 'react';

/* Importaciones propias */
import {taskReducer} from './taskReducer';
import {taskContext} from './taskContext';
import {ADD_TASK, TASKS_PROJECT} from '../../types';

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
    ],
    tasksProject: null
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

    /* Agregar tarea al proyecto seleccionado */
    const addTask = (task) => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    return (
        <taskContext.Provider value={{
            tasks: state.tasks,
            tasksProject: state.tasksProject,
            getTasks,
            addTask
        }}>
            {props.children}
        </taskContext.Provider>
    )
}