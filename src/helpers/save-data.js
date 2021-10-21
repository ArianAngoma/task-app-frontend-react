/* Importaciones propias */
import {authLogin} from '../actions/auth';
import {showAlert} from '../actions/alert';

export const saveData = (data, dispatch) => {
    if (data.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        /* Login */
        dispatch(authLogin(data.user));
    } else {
        // console.log(data);

        if (data.msg) {
            dispatch(showAlert(data.msg, 'alert-error'));
        } else {
            data.errors.map(error => dispatch(showAlert(error.msg, 'alert-error')));
        }
    }
}