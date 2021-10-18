import {useContext} from 'react';

/* Importaciones propias */
import {projectContext} from '../../context/projects/projectContext';
import {taskContext} from '../../context/tasks/taskContext';

export const ProjectItem = ({project}) => {
    /* Context de Proyectos */
    const {projectActual} = useContext(projectContext);
    /* Context de Tareas */
    const {getTasks, cleatTask} = useContext(taskContext);

    /* Disparar la acción para activar el proyecto */
    const handleProjectActual = () => {
        /* Limpiar la tarea seleccionada */
        cleatTask();
        projectActual(project);
        getTasks(project.id)
    }

    return (
        <li>
            <button type="button"
                    className="btn btn-blank"
                    onClick={handleProjectActual}>
                {project.name}
            </button>
        </li>
    )
}