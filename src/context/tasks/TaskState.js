import {useReducer} from 'react';

/* Importaciones propias */
import {taskReducer} from './taskReducer';
import {taskContext} from './taskContext';
import {
    ADD_TASK,
    CLEAR_TASK,
    DELETE_TASK,
    STATE_TASK,
    TASK_ACTIVE,
    TASKS_PROJECT,
    UPDATE_TASK,
    VALIDATE_TASK
} from '../../types';

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
    errorTask: false,
    taskSelected: null
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

    /* Activa una tarea para la edición */
    const taskActive = (task) => {
        dispatch({
            type: TASK_ACTIVE,
            payload: task
        });
    }

    /* Edita una tarea */
    const updateTask = (task) => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        });
    }

    /* Limpiar la tarea seleccionada */
    const cleatTask = () => {
        dispatch({
            type: CLEAR_TASK
        });
    }

    return (
        <taskContext.Provider value={{
            tasks: state.tasks,
            tasksProject: state.tasksProject,
            errorTask: state.errorTask,
            taskSelected: state.taskSelected,
            getTasks,
            addTask,
            validateTask,
            deleteTask,
            changeStateTask,
            taskActive,
            updateTask,
            cleatTask
        }}>
            {props.children}
        </taskContext.Provider>
    )
}