/* Importaciones propias */
import {ProjectItem} from './ProjectItem';

export const ListProjects = () => {
    const projects = [
        {name: 'Tienda virtual'},
        {name: 'Intranet'},
        {name: 'Web'}
    ]

    return (
        <ul className="project-list">
            {
                projects.map(project => (
                    <ProjectItem key={project.name} project={project}/>
                ))
            }
        </ul>
    )
}