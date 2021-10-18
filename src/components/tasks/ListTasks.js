import {useContext} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

/* Importaciones propias */
import {TaskItem} from './TaskItem';
import {projectContext} from '../../context/projects/projectContext';
import {taskContext} from '../../context/tasks/taskContext';

export const ListTasks = () => {
    /* Obtener el state de proyecto */
    const {project, deleteProject} = useContext(projectContext);
    /* Context para Tareas */
    const {tasksProject} = useContext(taskContext);

    /* Valida si no hay un proycto activo */
    if (!project) return <h2>Selecciona un proyecto</h2>;


    /* Eliminar proyecto */
    const handleDeleteProject = () => {
        deleteProject(project.id);
    }

    return (
        <>
            <h2>Proyecto: {project.name}</h2>

            <ul className="list-tasks">
                {
                    (tasksProject.length === 0)
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