import {useState} from 'react';
import {Link} from 'react-router-dom';


export const Login = () => {
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
    };

    return (
        <div className="form-user">
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