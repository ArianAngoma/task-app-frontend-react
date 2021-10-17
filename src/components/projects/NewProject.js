import {useState} from 'react';

export const NewProject = () => {
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
    }

    return (
        <>
            <button type="button"
                    className="btn btn-block btn-primary">
                Nuevo Proyecto
            </button>

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
        </>
    )
}