import {
    BrowserRouter as Router,
    Switch,
    // Route,
    Redirect, Route
} from 'react-router-dom';

/* Importaciones propias */
import {Login} from '../components/auth/Login';
import {NewAccount} from '../components/auth/NewAccount';
import {Projects} from '../components/projects/Projects';

export const AppRouter = () => {
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