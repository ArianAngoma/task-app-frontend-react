import {FORM_PROJECT} from '../../types';

export const projectReducer = (state, action) => {
    switch (action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }

        default:
            return state;
    }
}