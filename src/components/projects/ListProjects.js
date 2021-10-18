import {useContext, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

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
    if (projects.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className="project-list">
            <TransitionGroup>
                {
                    projects.map(project => (
                        <CSSTransition key={project.id}
                                       timeout={200}
                                       classNames="projects">
                            <ProjectItem project={project}/>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </ul>
    )
}