import {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    // Route,
    Redirect, Route
} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

/* Importaciones propias */
import {Login} from '../components/auth/Login';
import {NewAccount} from '../components/auth/NewAccount';
import {Projects} from '../components/projects/Projects';
import {startChecking} from '../actions/auth';

export const AppRouter = () => {
    const dispatch = useDispatch();

    /* Estado de auth */
    const {checking, user} = useSelector(state => state.auth);

    /* Validar si tengo un usuario logueado */
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/new-account" component={NewAccount}/>

                    <Route exact path="/projects" component={Projects}/>

                    <Redirect to="/projects"/>
                </Switch>
            </div>
        </Router>
    )
}