import {useContext, useEffect} from 'react';

/* Importaciones pripias */
import {authContext} from '../../context/auth/authContext';


export const Bar = () => {
    /* Extraer informacion del aontext */
    const {user, renewToken, closeSession} = useContext(authContext);

    useEffect(() => {
        renewToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogout = () => {
        closeSession()
    }

    return (
        <header className="app-header">

            {
                (user) && (
                    <p className="user-name">Hola <span>{user.name}</span></p>
                )
            }

            <nav className="nav-main">
                <button className="btn btn-blank close-session" onClick={handleLogout}>Cerrar Sesión</button>
            </nav>
        </header>
    )
}