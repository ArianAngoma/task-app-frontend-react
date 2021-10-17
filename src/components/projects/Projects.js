/* Importaciones propias */
import {Sidebar} from '../layout/Sidebar';
import {Bar} from '../layout/Bar';

export const Projects = () => {
    return (
        <div className="container-app">
            <Sidebar/>

            <div className="main-section">
                <Bar/>

                <main>
                    <div className="container-tasks">

                    </div>
                </main>
            </div>
        </div>
    );
}