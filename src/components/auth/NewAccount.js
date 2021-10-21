import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

/* Importaciones propias */
import {useForm} from '../../hooks/useForm';
import {showAlert} from '../../actions/alert';

/* Estado inicial del formulario */
const initialStateForm = {
    name: '',
    email: '',
    password: '',
    confirm: ''
}

export const NewAccount = () => {
    const dispatch = useDispatch();

    /* Store de alert */
    const {alertOpen, alert} = useSelector(state => state.alert);

    /* Hook para manejar el estado del fomulario de registro */
    const [formRegisterValues, handleInputChange] = useForm(initialStateForm)
    const {name, email, password, confirm} = formRegisterValues;

    /* Registro de nuevo usuario */
    const handleSubmit = (e) => {
        e.preventDefault();

        /* Valida que no haya campos vacios */
        if (!name.length || !email.length || !password.length || !confirm.length) return dispatch(showAlert('Todos los campos son obligatorios', 'alert-error'));

        /* Valida si password tiene 6 caracteres */
        if (password.length < 6) return dispatch(showAlert('El password debe ser de al menos 6 caracteres', 'alert-error'));

        /* Valida si password son iguales */
        if (password !== confirm) return dispatch(showAlert('Los passwords no son iguales', 'alert-error'));
    };

    return (
        <div className="form-user">

            {
                (alertOpen) && (
                    <div className={`alert ${alert.category}`}>
                        {alert.msg}
                    </div>
                )
            }

            <div className="container-form shadow-dark">
                <h1>Obtener una cuenta</h1>

                <form onSubmit={handleSubmit}>
                    <div className="field-form">
                        <label htmlFor="name">Nombre</label>
                        <input type="text"
                               id="name"
                               name="name"
                               placeholder="Tu nombre"
                               value={name}
                               onChange={handleInputChange}/>
                    </div>

                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               id="email"
                               name="email"
                               placeholder="Tu email"
                               value={email}
                               onChange={handleInputChange}/>
                    </div>

                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               id="password"
                               name="password"
                               placeholder="Tu password"
                               value={password}
                               onChange={handleInputChange}/>
                    </div>

                    <div className="field-form">
                        <label htmlFor="confirm">Confirmar Password</label>
                        <input type="password"
                               id="confirm"
                               name="confirm"
                               placeholder="Repite tu password"
                               value={confirm}
                               onChange={handleInputChange}/>
                    </div>

                    <div className="field-form">
                        <input type="submit"
                               className="btn btn-primary btn-block"
                               value="Registrarme"/>
                    </div>
                </form>

                <Link to="/" className="link-account">Volver a Iniciar Sesión</Link>
            </div>
        </div>
    );
}