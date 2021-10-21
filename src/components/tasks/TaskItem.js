import {useDispatch} from 'react-redux';

/* Importaciones propias */
import {taskChangeState, taskClearActive, taskDeleted, taskSetActive} from '../../actions/task';

export const TaskItem = ({task}) => {
    const dispatch = useDispatch();

    /* Eliminar tarea */
    const handleDeleteTask = () => {
        /* Limpiar la tarea activa */
        dispatch(taskClearActive());

        /* Eliminar tarea */
        dispatch(taskDeleted(task.id));
    }

    /* Modificar el estado de la tarea */
    const handleChangeStateTask = () => {
        task.state = !task.state;
        dispatch(taskChangeState(task));
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
                    (task.state)
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