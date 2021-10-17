/* Importaciones propias */
import {TaskItem} from './TaskItem';

export const ListTasks = () => {
    const tasks = [
        {name: 'Elegir plataforma', state: true},
        {name: 'Cambiar cololres', state: true},
        {name: 'Formas de pago', state: false}
    ];

    return (
        <>
            <h2>Proyecto: Tienda Virtual</h2>

            <ul className="list-tasks">
                {
                    (tasks.length === 0)
                        ? (<li className="task"><p>No hay tareas</p></li>)
                        : (tasks.map(task => (
                            <TaskItem key={task.name} task={task}/>
                        )))
                }
            </ul>
        </>
    )
}