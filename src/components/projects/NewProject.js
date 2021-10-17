import {useContext, useState} from 'react';

/* Importaciones propias */
import {projectContext} from '../../context/projects/projectContext';

export const NewProject = () => {
    /* Obtener state del formulario */
    const projectsContext = useContext(projectContext);
    const {form, showForm, addNewProject} = projectsContext;

    const [project, setProject] = useState({
        name: ''
    });
    const {name} = project;

    /* Leer inputs */
    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    /* Enviar formulario */
    const handleSubmit = (e) => {
        e.preventDefault();

        /* Validar proyecto */
        if (name === '') return;

        /* Agregar proyecto al state */
        addNewProject(project);

        /* Limpiar formulario */
        setProject({name: ''})
    }

    /* Mostrar formulario */
    const handleShowForm = () => {
        showForm();
    }

    return (
        <>
            <button type="button"
                    className="btn btn-block btn-primary"
                    onClick={handleShowForm}>
                Nuevo Proyecto
            </button>

            {
                form && (
                    <form className="new-project-form"
                          onSubmit={handleSubmit}>
                        <input type="text"
                               className="input-text"
                               placeholder="Nombre del proyecto"
                               name="name"
                               value={name}
                               onChange={handleChange}/>

                        <input type="submit"
                               className="btn btn-primary btn-block"
                               value="Agregar Proyecto"/>
                    </form>
                )
            }
        </>
    )
}