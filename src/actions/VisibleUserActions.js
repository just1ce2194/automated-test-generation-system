import * as types from '../constants/ActionTypes';

export const logIn = ( user ) => {
    return {
        type: types.LOG_IN,
        user,
    };
};

export const logOut = () => {
    return {
        type: types.LOG_OUT,
    };
};
