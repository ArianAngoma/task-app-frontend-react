import {useContext, useEffect} from 'react';

/* Importaciones propias */
import {ProjectItem} from './ProjectItem';
import {projectContext} from '../../context/projects/projectContext';

export const ListProjects = () => {
    /* Obtener proyectos del state inicial */
    const {projects, getProjects} = useContext(projectContext);

    /* Cargar proyectos cuando cargue el componente */
    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, []);

    /* Validar si proyectos tiene contenido */
    if (projects.length === 0) return null;

    return (
        <ul className="project-list">
            {
                projects.map(project => (
                    <ProjectItem key={project.id}
                                 project={project}/>
                ))
            }
        </ul>
    )
}