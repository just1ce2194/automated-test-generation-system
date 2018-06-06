import {LOG_IN, LOG_OUT} from '../constants/ActionTypes';

const initialState = {
    name: 'Vitalii',
    role: 'user',
    loggedIn: true,
};

const visibleUser = ( state = initialState, action ) => {
    switch ( action.type ) {
        case LOG_IN:
            return Object.assign({}, state, {
                name: action.name,
                role: action.role,
                loggedIn: true,
            } );
        case LOG_OUT:
            return {
                name: '',
                role: '',
                loggedIn: false,
            };
        default:
            return state;
    }
};

export default visibleUser;
