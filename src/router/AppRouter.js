import {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    // Route,
    Redirect, // Route
} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

/* Importaciones propias */
import {Login} from '../components/auth/Login';
import {NewAccount} from '../components/auth/NewAccount';
import {Projects} from '../components/projects/Projects';
import {startChecking} from '../actions/auth';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();

    /* Estado de auth */
    const {checking, user} = useSelector(state => state.auth);

    /* Validar si tengo un usuario logueado */
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    /* Loading */
    if (checking) return (
        <div id="loader">

        </div>
    );

    return (
        <Router>
            <div>
                <Switch>
                    {/*<Route exact path="/" component={Login}/>
                    <Route exact path="/new-account" component={NewAccount}/>*/}
                    <PublicRoute exact path="/" isAuthenticated={!!user} component={Login}/>
                    <PublicRoute exact path="/new-account" isAuthenticated={!!user} component={NewAccount}/>

                    {/*<Route exact path="/projects" component={Projects}/>*/}
                    <PrivateRoute exact path="/projects" isAuthenticated={!!user} component={Projects}/>

                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}