import {Provider} from 'react-redux';

/* Importaciones propias */
import {store} from './store/store';
import {AppRouter} from './router/AppRouter';

function TaskApp() {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    );
}

export default TaskApp;
