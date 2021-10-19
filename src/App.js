import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/* Importaciones propias */
import {Login} from './components/auth/Login';
import {NewAccount} from './components/auth/NewAccount';
import {Projects} from './components/projects/Projects';
import {ProjectState} from './context/projects/ProjectState';
import {TaskState} from './context/tasks/TaskState';
import {AlertState} from './context/alerts/AlertState';
import {AuthState} from './context/auth/AuthState';

function App() {
    console.log(process.env.REACT_APP_API_URL)
    return (
        <ProjectState>
            <TaskState>
                <AlertState>
                    <AuthState>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Login}/>
                                <Route exact path="/new-account" component={NewAccount}/>
                                <Route exact path="/projects" component={Projects}/>
                            </Switch>
                        </Router>
                    </AuthState>
                </AlertState>
            </TaskState>
        </ProjectState>
    );
}

export default App;
