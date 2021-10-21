import {useDispatch} from 'react-redux';

/* Importaciones propias */
import {projectSetActive} from '../../actions/project';
import {taskClearActive, taskGetByProject} from '../../actions/task';

export const ProjectItem = ({project}) => {
    const dispatch = useDispatch();

    /* Disparar la acción para activar el proyecto */
    const handleActiveProject = () => {
        /* Limpiar la tarea activa */
        dispatch(taskClearActive());

        /* Activar proyecto */
        dispatch(projectSetActive(project));

        /* Obtener tareas del proyecto activado */
        dispatch(taskGetByProject(project.id));
    }

    return (
        <li>
            <button type="button"
                    className="btn btn-blank"
                    onClick={handleActiveProject}>
                {project.name}
            </button>
        </li>
    )
}