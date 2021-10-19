import {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';

/* Importaciones propias */
import {alertContext} from '../../context/alerts/alertContext';
import {authContext} from '../../context/auth/authContext';

export const Login = ({history}) => {
    /* Extraer valores del context */
    const {alert, showAlert} = useContext(alertContext);
    const {message, authenticated, signIn} = useContext(authContext);

    /* Para poder escuchar cuando haya nuevos mensajes o se haya autenticado */
    useEffect(() => {
        if (authenticated) return history.push('/projects');
        if (message) return showAlert(message.msg, message.category);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message, authenticated, history])

    /* State para iniciar sesión */
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    /* Extraer campos de user */
    const {email, password} = user;

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    /* Inicio de sesión */
    const handleSubmit = (e) => {
        e.preventDefault();

        /* Validar que no haya campos vacios */
        if ((email.trim() || password.trim()) === '') return showAlert('Todos los campos son obligatorios', 'alert-error');

        /* Loguear usuario */
        signIn({email, password});
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
                <h1>Iniciar Sesión</h1>

                <form onSubmit={handleSubmit}>
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