import {useSelector} from 'react-redux';

export const Bar = () => {
    /* Estado de auth */
    const {user} = useSelector(state => state.auth);

    return (
        <header className="app-header">
            <p className="user-name">Hola <span>{user.name}</span></p>

            <nav className="nav-main">
                <button className="btn btn-blank close-session">Cerrar Sesión</button>
            </nav>
        </header>
    )
}