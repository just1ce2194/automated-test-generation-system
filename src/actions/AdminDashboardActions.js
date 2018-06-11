import * as types from '../constants/ActionTypes';
import FetchUtil from '../utils/FetchUtil';
import constants from '../constants';

const domain = constants.domain;

const USERS_URL = domain + '/users';

export const usersChanged = ( users ) => {
    return {
        type: types.USERS_CHANGED,
        users: users,
    };
};

export const fetchUsers = () => {
    return ( dispatch ) => {
        const onSuccess = ( response ) => {
            const users = deserializeUsers( response );
            dispatch(usersChanged( users ));
        };

        return FetchUtil.fetchWrapper( USERS_URL,
            null, onSuccess, null );
    };
};

export const updateUser = (user, onSuccess) => {
    return ( dispatch ) => {
        return FetchUtil.fetchWrapper( USERS_URL, user,
            onSuccess, null, null, null, 'PUT' );
    };
};

const deserializeUsers = ( response ) => {
    return response;
};
