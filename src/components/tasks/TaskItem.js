import {useDispatch} from 'react-redux';

/* Importaciones propias */
import {taskClearActive, taskSetActive, taskStartDelete, taskStartUpdate} from '../../actions/task';

export const TaskItem = ({task}) => {
    const dispatch = useDispatch();

    /* Eliminar tarea */
    const handleDeleteTask = () => {
        /* Limpiar la tarea activa */
        dispatch(taskClearActive());

        /* Eliminar tarea */
        /*dispatch(taskDeleted(task.uid));*/
        dispatch(taskStartDelete(task.uid));
    }

    /* Modificar el estado de la tarea */
    const handleChangeStateTask = () => {
        task.status = !task.status;

        /* Actualizar tarea */
        dispatch(taskStartUpdate(task));
    }

    /* Activa la tarea */
    const handleEditState = () => {
        dispatch(taskSetActive(task));
    }

    return (
        <li className="task shadow">
            <p>{task.name}</p>

            <div className="state">
                {
                    (task.status)
                        ? (<button type="button"
                                   className="complete"
                                   onClick={handleChangeStateTask}>Completado</button>)
                        : (<button type="button"
                                   className="incomplete"
                                   onClick={handleChangeStateTask}>Incompleto</button>)
                }
            </div>

            <div className="actions">
                <button type="button" className="btn btn-primary"
                        onClick={handleEditState}>Editar
                </button>

                <button type="button"
                        className="btn btn-secondary"
                        onClick={handleDeleteTask}>Eliminar
                </button>
            </div>
        </li>
    )
}