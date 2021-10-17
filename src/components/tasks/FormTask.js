import {useContext} from 'react';


/* Importaciones propias */
import {projectContext} from '../../context/projects/projectContext';

export const FormTask = () => {
    const {project} = useContext(projectContext);

    /* Valida si no hay un proycto activo */
    if (!project) return null;

    return (
        <div className="form">
            <form>
                <div className="container-input">
                    <input type="text"
                           className="input-text"
                           placeholder="Nombre de la tarea"
                           name="name"/>
                </div>

                <div className="container-input">
                    <input type="submit"
                           className="btn btn-primary btn-submit btn-block"
                           value="Agregar Tarea"/>
                </div>
            </form>
        </div>
    )
}