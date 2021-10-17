/* Importaciones propias */
import {TaskItem} from './TaskItem';
import {useContext} from 'react';

/* Importaciones propias */
import {projectContext} from '../../context/projects/projectContext';

export const ListTasks = () => {
    /* Obtener el state de proyecto */
    const {project, deleteProject} = useContext(projectContext);

    /* Valida si no hay un proycto activo */
    if (!project) return <h2>Selecciona un proyecto</h2>;

    const tasks = [
        {name: 'Elegir plataforma', state: true},
        {name: 'Cambiar cololres', state: true},
        {name: 'Formas de pago', state: false}
    ];

    /* Eliminar proyecto */
    const handleDeleteProject = () => {
        deleteProject(project.id);
    }

    return (
        <>
            <h2>Proyecto: {project.name}</h2>

            <ul className="list-tasks">
                {
                    (tasks.length === 0)
                        ? (<li className="task"><p>No hay tareas</p></li>)
                        : (tasks.map(task => (
                            <TaskItem key={task.name} task={task}/>
                        )))
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