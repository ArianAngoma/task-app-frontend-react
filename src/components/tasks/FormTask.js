import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

/* Importaciones propias */
import {useForm} from '../../hooks/useForm';
import {taskClearActive, taskStartAdd, taskStartUpdate} from '../../actions/task';
import {uiCloseErrorTask, uiOpenErrorTask} from '../../actions/ui';

/* Estado inicial del formulario */
const initialStateForm = {
    name: ''
}

export const FormTask = () => {
    const dispatch = useDispatch();

    /* Leer store de uiForm */
    const {errorFormTask} = useSelector(state => state.ui);

    /* Store de proyecto */
    const {activeProject} = useSelector(state => state.project);
    /* Store de tarea */
    const {activeTask} = useSelector(state => state.task);

    /* Hook para el formulario de proyecto */
    const [formTaskValues, handleInputChange, resetForm] = useForm(initialStateForm);
    const {name} = formTaskValues;

    /* Detectar si hay una tarea seleccionada */
    useEffect(() => {
        if (activeTask) return resetForm(activeTask);
        else resetForm(initialStateForm);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTask]);

    /* Valida si no hay un proyecto activo */
    if (!activeProject) return null;

    /* Enviar formulario */
    const handleSubmit = (e) => {
        e.preventDefault();

        /* Validar formulario */
        if (!name.length) return dispatch(uiOpenErrorTask());
        /* Cerrar error del formulario */
        dispatch(uiCloseErrorTask());

        /* Revisa si quiere editar o agregar una tarea */
        if (!activeTask) {
            /* Agregar nueva Tarea */
            dispatch(taskStartAdd({
                ...formTaskValues,
                project: activeProject.uid,
            }));
        } else {
            // console.log({...formTaskValues})

            /*dispatch(taskUpdated({
                ...formTaskValues
            }));*/

            /* Edita la tarea activa */
            dispatch(taskStartUpdate({...formTaskValues}));

            /* Limpiar la tarea activa */
            dispatch(taskClearActive());
        }

        /* Limpiar formulario */
        resetForm(initialStateForm);
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
                           onChange={handleInputChange}/>
                </div>

                <div className="container-input">
                    <input type="submit"
                           className="btn btn-primary btn-submit btn-block"
                           value={(activeTask) ? "Editar Tarea" : "Agregar Tarea"}/>
                </div>
            </form>

            {
                (errorFormTask) && <p className="message error">El nombre de la tarea es obligatorio</p>
            }

        </div>
    )
}