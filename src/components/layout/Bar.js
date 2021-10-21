import {useDispatch, useSelector} from 'react-redux';

/* Importaciones propias */
import {startLogout} from '../../actions/auth';

export const Bar = () => {
    const dispatch = useDispatch();

    /* Estado de auth */
    const {user} = useSelector(state => state.auth);

    /* Logout de usuario */
    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <header className="app-header">
            <p className="user-name">Hola <span>{user.name}</span></p>

            <nav className="nav-main">
                <button className="btn btn-blank close-session" onClick={handleLogout}>Cerrar Sesión</button>
            </nav>
        </header>
    )
}