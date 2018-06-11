import {USERS_CHANGED} from '../constants/ActionTypes';

const initialState = {
    users: [],
};

const adminDashboard = ( state = initialState, action ) => {
    switch ( action.type ) {
        case USERS_CHANGED:
            return Object.assign({}, state, {
                users: action.users,
            } );
        default:
            return state;
    }
};

export default adminDashboard;
