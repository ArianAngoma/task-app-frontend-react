import {useContext} from 'react';
import {taskContext} from '../../context/tasks/taskContext';

export const TaskItem = ({task}) => {
    const {deleteTask, changeStateTask} = useContext(taskContext);

    /* Eliminar tarea */
    const handleDeleteTask = () => {
        deleteTask(task.id);
    }

    /* Modificar el estado de las tareas */
    const handleStateTask = () => {
        task.state = !task.state;
        changeStateTask(task);
    }

    return (
        <li className="task shadow">
            <p>{task.name}</p>

            <div className="state">
                {
                    (task.state)
                        ? (<button type="button"
                                   className="complete"
                                   onClick={handleStateTask}>Completado</button>)
                        : (<button type="button"
                                   className="incomplete"
                                   onClick={handleStateTask}>Incompleto</button>)
                }
            </div>

            <div className="actions">
                <button type="button" className="btn btn-primary">Editar</button>

                <button type="button"
                        className="btn btn-secondary"
                        onClick={handleDeleteTask}>Eliminar
                </button>
            </div>
        </li>
    )
}