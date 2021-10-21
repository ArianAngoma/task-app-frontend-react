import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

/* Importaciones propias */
import {startLogin} from '../../actions/auth';
import {showAlert} from '../../actions/alert';
import {useForm} from '../../hooks/useForm';

/* Estado inicial del formulario */
const initialStateForm = {
    email: '',
    password: ''
}

export const Login = () => {
    const dispatch = useDispatch();

    /* Store de alert */
    const {alertOpen, alert} = useSelector(state => state.alert);

    /* Hook para el forumario de logueo */
    const [formLoginValues, handleInputChange] = useForm(initialStateForm);
    const {email, password} = formLoginValues;

    /* Inicio de sesión */
    const handleSubmit = (e) => {
        e.preventDefault();

        /* Validar que no haya campos vacios */
        if (!email.length || !password.length) return dispatch(showAlert('Todos los campos son obligatorios', 'alert-error'));

        /* Dispara acción para comenzar el logueo */
        dispatch(startLogin(email, password));
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
                <h1>Iniciar Sesión</h1>

                <form onSubmit={handleSubmit}>
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
                        <input type="submit"
                               className="btn btn-primary btn-block"
                               value="Iniciar Sesión"/>
                    </div>
                </form>

                <Link to="/new-account" className="link-account">Obtener Cuenta</Link>
            </div>
        </div>
    );
}