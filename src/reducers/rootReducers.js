import {combineReducers} from 'redux';

/* Importaciones propias  */
import {uiFormReducer} from './uiFormReducer';
import {alertReducer} from './alertReducer';
import {projectReducer} from './projectReducer';
import {taskReducer} from './taskReducer';
import {authReducer} from './authReducer';

export const rootReducers = combineReducers({
    ui: uiFormReducer,
    alert: alertReducer,
    project: projectReducer,
    task: taskReducer,
    auth: authReducer
});