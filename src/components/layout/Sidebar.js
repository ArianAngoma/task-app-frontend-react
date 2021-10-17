/* Importaciones propias */
import {NewProject} from '../projects/NewProject';
import {ListProjects} from '../projects/ListProjects';

export const Sidebar = () => {
    return (
        <aside>
            <h1>Task App</h1>

            <NewProject/>

            <div className="projects">
                <h2>Tus Proyectos</h2>

                <ListProjects/>
            </div>
        </aside>
    )
}