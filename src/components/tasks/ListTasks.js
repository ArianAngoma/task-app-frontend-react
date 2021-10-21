import {useDispatch, useSelector} from 'react-redux';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

/* Importaciones propias */
import {TaskItem} from './TaskItem';
import {projectDeleted} from '../../actions/project';

export const ListTasks = () => {
    const dispatch = useDispatch();

    /* Store de proyecto */
    const {activeProject} = useSelector(state => state.project);
    /* Store de tarea */
    const {tasksProject} = useSelector(state => state.task);

    /* Valida si no hay un proyecto activo */
    if (!activeProject) return <h2>Selecciona un proyecto</h2>;

    /* Eliminar proyecto */
    const handleDeleteProject = () => {
        dispatch(projectDeleted());
    }

    return (
        <>
            <h2>Proyecto: {activeProject.name}</h2>

            <ul className="list-tasks">
                {
                    (!tasksProject.length)
                        ? (<li className="task"><p>No hay tareas</p></li>)
                        :
                        <TransitionGroup>
                            {tasksProject.map(task => (
                                <CSSTransition key={task.id}
                                               timeout={200}
                                               classNames="task">
                                    <TaskItem task={task}/>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                }
            </ul>

            <button type="button"
                    className="btn btn-delete"
                    onClick={handleDeleteProject}>
                Eliminar Proyecto &times;
            </button>
        </>
    )
}