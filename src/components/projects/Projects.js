/* Importaciones propias */
import {Sidebar} from '../layout/Sidebar';
import {Bar} from '../layout/Bar';
import {FormTask} from '../tasks/FormTask';
import {ListTasks} from '../tasks/ListTasks';

export const Projects = () => {
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