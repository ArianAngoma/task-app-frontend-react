import {useContext, useState} from 'react';

/* Importaciones propias */
import {projectContext} from '../../context/projects/projectContext';
import {taskContext} from '../../context/tasks/taskContext';

export const FormTask = () => {
    const {project} = useContext(projectContext);
    const {addTask, errorTask, validateTask} = useContext(taskContext);

    const [task, setTask] = useState({
        name: ''
    });
    const {name} = task;
    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    }

    /* Valida si no hay un proycto activo */
    if (!project) return null;

    /* Enviar formulario */
    const handleSubmit = (e) => {
        e.preventDefault();

        /* Validar formulario */
        if (name.trim() === '') return validateTask();

        /* Agregar nueva Tarea */
        task.id = new Date().getTime();
        task.projectId = project.id;
        task.state = false;
        addTask(task);

        /* Limpiar formulario */
        setTask({
            name: ''
        });
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="container-input">
                    <input type="text"
                           className="input-text"
                           placeholder="Nombre de la tarea"
                           name="name"
                           value={name}
                           onChange={handleChange}/>
                </div>

                <div className="container-input">
                    <input type="submit"
                           className="btn btn-primary btn-submit btn-block"
                           value="Agregar Tarea"/>
                </div>
            </form>

            {
                (errorTask) && <p className="message error">El nombre de la tarea es obligatorio</p>
            }
        </div>
    )
}