import {useContext} from 'react';

/* Importaciones propias */
import {projectContext} from '../../context/projects/projectContext';

export const ProjectItem = ({project}) => {
    const {projectActual} = useContext(projectContext);

    /* Disparar la acción para activar el proyecto */
    const handleProjectActual = () => {
        projectActual(project);
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