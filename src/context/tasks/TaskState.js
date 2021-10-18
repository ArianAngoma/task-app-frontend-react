import {useReducer} from 'react';

/* Importaciones propias */
import {taskReducer} from './taskReducer';
import {taskContext} from './taskContext';
import {ADD_TASK, DELETE_TASK, STATE_TASK, TASKS_PROJECT, VALIDATE_TASK} from '../../types';

const initialState = {
    tasks: [
        {id: 1, name: 'Elegir plataforma', state: true, projectId: 1},
        {id: 2, name: 'Cambiar cololres', state: true, projectId: 2},
        {id: 3, name: 'Formas de pago', state: false, projectId: 3},
        {id: 4, name: 'Elegir plataforma', state: true, projectId: 1},
        {id: 5, name: 'Cambiar cololres', state: true, projectId: 2},
        {id: 6, name: 'Formas de pago', state: false, projectId: 3},
        {id: 7, name: 'Elegir plataforma', state: true, projectId: 1},
        {id: 8, name: 'Cambiar cololres', state: true, projectId: 2},
        {id: 9, name: 'Formas de pago', state: false, projectId: 3},
        {id: 10, name: 'Elegir plataforma', state: true, projectId: 1},
        {id: 11, name: 'Cambiar cololres', state: true, projectId: 2},
        {id: 12, name: 'Formas de pago', state: false, projectId: 3}
    ],
    tasksProject: null,
    errorTask: false
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

    /* Valida el formulario */
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        });
    }

    /* Eliminar tarea */
    const deleteTask = (taskId) => {
        dispatch({
            type: DELETE_TASK,
            payload: taskId
        });
    }

    /* Cambia el estado de cada tarea */
    const changeStateTask = (task) => {
        dispatch({
            type: STATE_TASK,
            payload: task
        });
    }

    return (
        <taskContext.Provider value={{
            tasks: state.tasks,
            tasksProject: state.tasksProject,
            errorTask: state.errorTask,
            getTasks,
            addTask,
            validateTask,
            deleteTask,
            changeStateTask
        }}>
            {props.children}
        </taskContext.Provider>
    )
}