import {useSelector} from 'react-redux';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

/* Importaciones propias */
import {ProjectItem} from './ProjectItem';

export const ListProjects = () => {
    /* Leer state de proyectos */
    const {projects} = useSelector(state => state.project);

    /* Validar si proyectos tiene contenido */
    if (!projects.length) return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className="project-list">
            <TransitionGroup>
                {
                    projects.map(project => (
                        <CSSTransition key={project.uid}
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