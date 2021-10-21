import {useDispatch, useSelector} from 'react-redux';

/* Importaciones propias */
import {useForm} from '../../hooks/useForm';
import {uiCloseErrorProject, uiCloseFormProject, uiOpenErrorProject, uiOpenFormProject} from '../../actions/ui';
import {projectAdded} from '../../actions/project';

/* Estado inicial del formulario */
const initialStateForm = {
    name: ''
}

export const NewProject = () => {
    const dispatch = useDispatch();

    /* Leer state de uiForm */
    const {openFormProject, errorFormProject} = useSelector(state => state.ui);

    /* Hook para el formulario de proyecto */
    const [formProjectValues, handleInputChange, resetForm] = useForm(initialStateForm);
    const {name} = formProjectValues;

    /* Mostrar formulario */
    const handleShowForm = () => {
        dispatch(uiOpenFormProject());
    }

    /* Enviar formulario */
    const handleSubmit = (e) => {
        e.preventDefault();

        /* Validar proyecto */
        if (!name.length) return dispatch(uiOpenErrorProject());

        /* Agregar nuevo proyecto */
        dispatch(projectAdded({id: new Date().getTime(), name}));

        /* Cerrar error del formulario */
        dispatch(uiCloseErrorProject());

        /* Limpiar formulario */
        resetForm(initialStateForm);

        /* Cerrar formulario de proyecto */
        dispatch(uiCloseFormProject());
    }

    return (
        <>
            <button type="button"
                    className="btn btn-block btn-primary"
                    onClick={handleShowForm}>
                Nuevo Proyecto
            </button>

            {
                (openFormProject) && (
                    <form className="new-project-form"
                          onSubmit={handleSubmit}>
                        <input type="text"
                               className="input-text"
                               placeholder="Nombre del proyecto"
                               name="name"
                               value={name}
                               onChange={handleInputChange}/>

                        <input type="submit"
                               className="btn btn-primary btn-block"
                               value="Agregar Proyecto"/>
                    </form>
                )
            }

            {
                (errorFormProject) && (
                    <p className="message error">El nombre del proyecto es obligatorio</p>
                )
            }
        </>
    )
}