import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';

/* Importaciones propias */
import {alertContext} from '../../context/alerts/alertContext';

export const NewAccount = () => {
    /* Extraer valores del context */
    const {alert, showAlert} = useContext(alertContext);

    /* State para registro de nuevo usuario */
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });
    /* Extraer campos de user */
    const {name, email, password, confirm} = user;

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    /* Registro de nuevo usuario */
    const handleSubmit = (e) => {
        e.preventDefault();

        /* Validar que no haya campos vacios */
        if ((name.trim() || email.trim() || password.trim() || confirm.trim()) === '') return showAlert('Todos los campos son obligatorios', 'alert-error');

        /* Valida si password tiene 6 caracteres */
        if (password.length < 6) return showAlert('El password debe ser de al menos 6 caracteres', 'alert-error');

        /* Valida si password son iguales */
        if (password !== confirm) return showAlert('Los passwords no son iguales', 'alert-error');
    };

    return (
        <div className="form-user">

            {
                (alert) && (
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
                               onChange={handleOnChange}/>
                    </div>

                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               id="email"
                               name="email"
                               placeholder="Tu email"
                               value={email}
                               onChange={handleOnChange}/>
                    </div>

                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               id="password"
                               name="password"
                               placeholder="Tu password"
                               value={password}
                               onChange={handleOnChange}/>
                    </div>

                    <div className="field-form">
                        <label htmlFor="confirm">Confirmar Password</label>
                        <input type="password"
                               id="confirm"
                               name="confirm"
                               placeholder="Repite tu password"
                               value={confirm}
                               onChange={handleOnChange}/>
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