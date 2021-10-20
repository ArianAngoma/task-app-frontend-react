import {useContext, useEffect} from 'react';

/* Importaciones propias */
import {Sidebar} from '../layout/Sidebar';
import {Bar} from '../layout/Bar';
import {FormTask} from '../tasks/FormTask';
import {ListTasks} from '../tasks/ListTasks';
import {authContext} from '../../context/auth/authContext';

export const Projects = () => {
    /* Extraer informacion del aontext */
    const {renewToken} = useContext(authContext);

    useEffect(() => {
        renewToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container-app">
            <Sidebar/>

            <div className="main-section">
                <Bar/>

                <main>
                    <FormTask/>

                    <div className="container-tasks">
                        <ListTasks/>
                    </div>
                </main>
            </div>
        </div>
    );
}